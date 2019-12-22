import 'isomorphic-unfetch';
import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import initApolloClient from '../lib/initApolloClient';

class MyApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
  }

  render() {
    const client = initApolloClient();
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default MyApp;
