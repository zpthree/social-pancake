const mongoose = require('mongoose');
const UserModel = require('./models/UserModel');
const RecipeModel = require('./models/RecipeModel');

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const db = mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

const models = {
  User: UserModel,
  Recipe: RecipeModel,
};

module.exports = {
  db,
  models,
};
