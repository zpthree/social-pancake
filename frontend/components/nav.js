import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.nav`
  a {
    color: white;
    margin: 0 1rem;
  }
`;

const Nav = () => (
  <NavStyles>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/sign-in">
      <a>Sign In</a>
    </Link>
  </NavStyles>
);

export default Nav;
