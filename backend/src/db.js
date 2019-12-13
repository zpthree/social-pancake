const mongoose = require('mongoose');
const UserModel = require('./models/UserModel');
const PostModel = require('./models/PostModel');

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const db = mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

const models = {
  User: UserModel,
  Post: PostModel,
};

module.exports = {
  db,
  models,
};
