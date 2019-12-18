exports.createRecipe = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw Error('You must be signed in to create a new recipe.');
  }

  const user = await ctx.models.User.findById(ctx.request.userId);

  const recipe = await new ctx.models.Recipe({
    ...args,
    user: user.id,
  });

  // add new recipe to user recipe reference
  await ctx.models.User.findByIdAndUpdate(
    user.id,
    {
      $push: { recipes: recipe.id },
    },
    { new: true }
  );

  return recipe.save();
};

exports.deleteRecipe = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw Error('Unable to delete recipe. Make sure you are signed in');
  }

  const recipe = await ctx.models.Recipe.findByIdAndDelete(args.id);

  if (!recipe) {
    throw Error('The recipe you are trying to delete could not be found.');
  }

  // remove recipe from user recipe reference
  await ctx.models.User.findByIdAndUpdate(
    ctx.request.userId,
    {
      $pull: { recipes: recipe.id },
    },
    { new: true }
  );

  return { message: 'Recipe has been deleted successfully!' };
};
