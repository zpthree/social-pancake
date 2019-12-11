const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function checkUniqueUserValues(model, email, username) {
  const emailExists = await model.findOne({ email });
  const usernameExists = await model.findOne({ username });

  if (emailExists) throw new Error('Email is being used by another user');
  if (usernameExists) throw new Error('Username is being used by another user');

  return null;
}

const Mutation = {
  async createUser(_, args, ctx) {
    await checkUniqueUserValues(ctx.models.User, args.email, args.username);
    const password = await bcrypt.hash(args.password, 10);

    const user = await ctx.models.User({
      ...args,
      password,
    });

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    const cookiecookie = ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });

    console.log(cookiecookie);

    return user.save();
  },
};

module.exports = Mutation;
