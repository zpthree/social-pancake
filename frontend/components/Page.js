import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import { GlobalStyles } from '../styles/global';
import siteTheme from '../styles/theme';

const Main = styled.main`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: auto;
`;

const Page = ({ children, location }) => (
  <ThemeProvider theme={siteTheme}>
    <>
      <GlobalStyles />
      <Meta />
      {location !== 'sign-in' && <Header />}
      <Main>{children}</Main>
    </>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string,
};

export default Page;
