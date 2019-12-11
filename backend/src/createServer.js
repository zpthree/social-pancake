const { GraphQLServer } = require(`graphql-yoga`);
const { connectDB, models } = require('./db');
const Query = require('./graphql/resolvers/Query');
const Mutation = require('./graphql/resolvers/Mutation');

const db = connectDB();

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/graphql/schema.graphql',
    resolvers: {
      Query,
      Mutation,
    },
    context: req => ({ ...req, db, models }),
  });
}

module.exports = createServer;
