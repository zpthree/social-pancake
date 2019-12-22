import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';

Router.onRouteChangeStart = () => NProgress.start();

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

const HeaderStyles = styled.header`
  background: var(--green);
  height: 7rem;
  width: 100%;
  padding: 0.5rem 1rem;
  color: var(--white);

  h1 {
    margin: 0;
  }
`;

const Header = () => (
  <HeaderStyles>
    <h1>Social Pancake</h1>
    <Nav />
  </HeaderStyles>
);

export default Header;
