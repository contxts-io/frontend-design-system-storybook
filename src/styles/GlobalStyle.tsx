import { createGlobalStyle } from 'styled-components';
import { themeVariables } from './colors';

const GlobalStyle = createGlobalStyle`
  :root {
    ${themeVariables};
  }
  *, 
  *:before,
  *:after { 
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: 12px;
  }
  html {
    box-sizing: border-box;
    -ms-overflow-style: none; /* IE and Edge scroll hide */
    scrollbar-width: none; /* Firefox scroll hide */
    &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera scroll hide */
    }
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: ${(props) => props.theme.colors['text-01']};
    overflow: unset;
  }
  
  #docs-root > div {
    background-color: ${(props) => props.theme.colors['ui-background']};
  }

  table,
  thead,
  tbody,
  tfoot,
  tr,
  th,
  td {
    display: block;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    border: none;
    border-collapse: inherit;
    border-spacing: 0;
    border-color: inherit;
    text-align: left;
    font-weight: inherit;
    -webkit-border-horizontal-spacing: 0;
    -webkit-border-vertical-spacing: 0;
  }
  ol, ul, li {
    list-style: none;
    font-family: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 { 
    margin: 0; 
    font-family: inherit;
    font-weight: inherit;
  }
  a,
  a:link,
  a:visited,
  a:active {
    font-family: inherit;
    text-decoration: none;
  }
  button {
    padding: 0;
    outline: none;
    border: none;
    color: inherit;
    font-family: inherit;
    background-color: inherit;
    cursor: pointer;
  }
  input,
  input:focus {
    font-family: inherit;
    color: inherit;
    border-style: none; 
    background: transparent; 
    outline: none;
  }
  /* number input에서 위아래 화살표 삭제 - Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* number input에서 위아래 화살표 삭제 - Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
