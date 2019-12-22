import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    color: var(--black);
  }

  a {
    text-decoration: none;
    color: var(--green);

    &:hover {
      text-decoration: underline;
    }
  }
`;
