const UserMutation = require('./UserMutation');
const RecipeMutation = require('./RecipeMutation');

module.exports = {
  ...UserMutation,
  ...RecipeMutation,
};
