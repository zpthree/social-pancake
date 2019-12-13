const Query = {
  me(_, args, ctx) {
    if (!ctx.request.userId) return null;

    return ctx.models.User.findById(ctx.request.userId).populate({
      path: 'posts',
      populate: { path: 'user' },
    });
  },
  posts(_, args, ctx) {
    return ctx.models.Post.find({});
  },
};

module.exports = Query;
