const { GraphQLServer } = require(`graphql-yoga`);
const { db, models } = require('./db');
const Query = require('./graphql/resolvers/Query');
const Mutation = require('./graphql/resolvers/Mutation');

const server = new GraphQLServer({
  typeDefs: 'src/graphql/schema.graphql',
  resolvers: {
    Query,
    Mutation,
  },
  context: req => ({ ...req, db, models }),
});

module.exports = server;
