import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-client';
import fetch from 'isomorphic-unfetch';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { endpoint } from '../config';

const httpLink = new HttpLink({
  uri: endpoint,
  credentials: 'include',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || null,
    },
  }));

  return forward(operation);
});

const initApolloClient = (initialState = {}) => {
  const cache = new InMemoryCache().restore(initialState);

  const client = new ApolloClient({
    cache,
    link: httpLink,
    fetch,
    request: authMiddleware,
  });

  return client;
};

export default initApolloClient;
