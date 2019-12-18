exports.me = (_, args, ctx) => {
  if (!ctx.request.userId) return null;

  return ctx.models.User.findById(ctx.request.userId).populate({
    path: 'recipes',
    populate: { path: 'user' },
  });
};

exports.user = async (_, args, ctx) => {
  // get users id - because they're username could change but their id will not
  const id = await ctx.models.User.findOne(
    { username: { $regex: new RegExp(`^${args.username}$`, 'i') } },
    'id'
  );

  // TODO some users may have private accounts - make sure current user has permissions to view that users profile

  const user = await ctx.models.User.findById(id).populate({
    path: 'recipes',
    populate: { path: 'user' },
  });

  return user;
};

exports.recipe = async (_, args, ctx) => {
  if (!args.id) throw Error('The recipe you are looking for could not found.');

  try {
    return await ctx.models.Recipe.findById(args.id);
  } catch (err) {
    throw Error('The recipe you are looking for could not found.');
  }
};

exports.recipes = async (_, args, ctx) => {
  // TODO add ability to filter, skip, and limit recipes
  const recipes = await ctx.models.Recipe.find({}).populate({
    path: 'user',
    populate: { path: 'recipes' },
  });

  console.log(recipes);

  return recipes;
};
