import { createGlobalStyle } from 'styled-components';
import MullerRegularWoff2 from '../assets/fonts/MullerRegular.woff2';
import MullerExtraBoldWoff2 from '../assets/fonts/MullerExtraBold.woff2';
import { ThemeType } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  @font-face {
    font-family: 'Muller';
    src: local('Muller Regular'), local('Muller-Regular'),
      url(${MullerRegularWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'MullerBold';
    src: local('Muller Extra Bold'), local('Muller-Extra-Bold'),
      url(${MullerExtraBoldWoff2}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: ${({ theme }) => theme.font.base};
    line-height: 22px;
    font-family: 'Muller', Arial, sans-serif;
    color: ${({ theme }) => theme.color.grey};
    word-wrap: break-word;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, nav {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  b {
    font-family: 'MullerBold', Arial, sans-serif;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }

  #root {
    overflow-x:hidden;
  }

  .visually-hidden {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px
  }

  .error-text {
    color: ${({ theme }) => theme.color.error};
    font-size: ${({ theme }) => theme.font.semibase};
    line-height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.viewportSize.middle}) {
    body {
      font-size: ${({ theme }) => theme.font.semibase};
      line-height: 20px;
    }
  }
`;

export default GlobalStyle;
