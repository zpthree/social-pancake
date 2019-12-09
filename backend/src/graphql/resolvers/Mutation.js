const Mutation = {
  async createUser(_, args, ctx) {
    const newUser = await ctx.models.User({
      ...args,
    });

    return newUser.save();
  },
};

module.exports = Mutation;
