const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const checkUnique = require('../../../lib/checkUniqueValues');

exports.signIn = async (_, { email, password }, ctx) => {
  const user = await ctx.models.User.findOne({ email });

  if (!user) {
    throw Error(`No user found with the email: ${email}.`);
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    throw Error('Invalid password.');
  }

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

  ctx.response.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });

  return user;
};

exports.signOut = async (_, args, ctx) => {
  ctx.response.clearCookie('token');

  return { message: 'User has successfully been logged out.' };
};

exports.createUser = async (_, args, ctx) => {
  await checkUnique(ctx.models.User, [
    ['email', args.email],
    ['username', args.username],
  ]);

  const password = await bcrypt.hash(args.password, 10);

  args.email = args.email.toLowerCase();

  // create new user
  const user = await new ctx.models.User({
    ...args,
    password,
  });

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

  ctx.response.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });

  return user.save();
};

exports.updateUser = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw Error(
      'You do not have permission to update this user. Make sure you are signed in.'
    );
  }

  if (!Object.keys(args).length) {
    throw Error("There's nothing to change.");
  }

  await checkUnique(ctx.models.User, [
    args.email ? ['email', args.email] : [],
    args.username ? ['username', args.username] : [],
  ]);

  try {
    return await ctx.models.User.findByIdAndUpdate(
      ctx.request.userId,
      { ...args },
      { new: true, runValidators: true }
    );
  } catch (err) {
    throw Error(
      'Changes to user could not be saved. Make sure you are signed in.'
    );
  }
};
