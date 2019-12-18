import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Me from './Me';
import SignOut from './SignOut';

const NavStyles = styled.nav`
  a {
    color: white;
    margin: 0 1rem;
  }
`;

const Nav = () => (
  <Me>
    {({ data }) => console.log(data) || (
      <NavStyles>
        <Link href="/">
          <a>Home</a>
        </Link>
        {data?.me && (
          <Link href="/create-recipe">
            <a>Create Recipe</a>
          </Link>
        )}
        <Link href="/discover-recipes">
          <a>Discover Recipes</a>
        </Link>
        {!data?.me && (
          <Link href="/sign-in">
            <a>Sign In</a>
          </Link>
        )}
        {data?.me && <SignOut />}
      </NavStyles>
    )}
  </Me>
);

export default Nav;
