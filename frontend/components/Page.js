import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import { GlobalStyles } from '../styles/global';
import siteTheme from '../styles/theme';
import Loading from './Loading';

const Main = styled.main`
  max-width: var(--max-width);
  margin: auto;
`;

const Page = ({ children, location, loading }) => (
  <ThemeProvider theme={siteTheme}>
    <>
      <GlobalStyles />
      <Meta />
      {location !== 'sign-in' && <Header />}
      <Loading loading={loading}>
        <Main>{children}</Main>
      </Loading>
    </>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string,
  loading: PropTypes.bool,
};

export default Page;
