const PostMutation = {
  async createPost(_, args, ctx) {
    if (!ctx.request.userId) {
      throw Error('You must be signed in to create a new post.');
    }

    const user = await ctx.models.User.findById(ctx.request.userId);

    const post = await new ctx.models.Post({
      ...args,
      user: user.id,
    });

    // add new post to user post reference
    await ctx.models.User.findByIdAndUpdate(
      user.id,
      {
        $push: { posts: post.id },
      },
      { new: true }
    );

    return post.save();
  },
  async deletePost(_, args, ctx) {
    if (!ctx.request.userId) {
      throw Error('Unable to delete post. Make sure you are signed in');
    }

    const post = await ctx.models.Post.findByIdAndDelete(args.id);

    if (!post) {
      throw Error('The post you are trying to delete could not be found.');
    }

    return { message: 'Post has been deleted successfully!' };
  },
};

module.exports = PostMutation;
