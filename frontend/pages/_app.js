import 'isomorphic-unfetch';
import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/createClient';
import Page from '../components/Page';

class MyApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={client}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
}

export default MyApp;
