import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}

body {
  background: #eee;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  font-size: 14px;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}

border-style, html, #root {
  height: 100%;
}
`;
