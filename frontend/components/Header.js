import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const HeaderStyles = styled.header`
  background: blue;
  height: 7rem;
  width: 100%;
  padding: 0.5rem 1rem;
  color: white;

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
