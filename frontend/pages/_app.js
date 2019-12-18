import 'isomorphic-unfetch';
import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/createClient';
import '../public/styles/nprogress.css';

class MyApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default MyApp;
