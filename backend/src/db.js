const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.set('useCreateIndex', true);

const connectDB = () =>
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const models = {
  User,
};

module.exports = {
  connectDB,
  models,
};
