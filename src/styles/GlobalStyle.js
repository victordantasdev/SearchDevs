import { createGlobalStyle } from 'styled-components';
import Theme from './Theme';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    background-color: ${Theme.backgroundWhite};
    font-family: 'Lato', sans-serif;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;
