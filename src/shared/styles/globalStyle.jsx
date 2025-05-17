import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';

const globalStyle = css`
  ${reset}

  * {
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    min-width: 375px;
    max-width: 430px;
    min-height: 100dvh;
    background-color: #fff;
    margin: 0 auto;
  }

  @media (min-width: 430px) {
    #root {
      max-width: var(—max-width);
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    }
  }

  html,
  body {
    width: 100%;
    margin: 0;
    padding: 0;

    font-size: 62.5%;
    scrollbar-width: none;
    scroll-behavior: smooth;
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  input {
    border: none;
    :focus {
      outline: none;
    }
  }

  a {
    text-decoration: none;
  }

  select {
    background: #fff;
  }

  /* Chrome, Safari 등에서 스크롤바 숨김 처리 */
  ::-webkit-scrollbar {
    display: none;
  }
`;
const GlobalStyle = () => <Global styles={globalStyle} />;

export default GlobalStyle;
