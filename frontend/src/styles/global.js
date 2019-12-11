import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialised;
  background-color: #c0cfff;
}

.content {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 40px;
}


button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}
`