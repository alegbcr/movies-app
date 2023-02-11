import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  /* Palette Colors */
  --black-color: #242424;
  --gray-dark-color: #072227;
  --green-color: #00ADB5;
  --light-green-color:#AAD8D3;
  --white-color:#EEEEEE ;



  /* Font sizes */
  --large-title:20px;
  --normal-paragraph: 16px;
  --small-paragraph: 12px;

  /* Line Heights */
  --low-height: 16px;
  --normal-height: 24px;
  
  
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: var(--normal-paragraph);
  line-height: var(--normal-height);
  font-weight: 400;

  color-scheme: light dark;
  color: var(--white-color);
  background-color: var(--black-color);

  

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

button {
  border: none;
  border-radius: 5px;
}

input {
  border: none;
  width: 100%;
  padding: 5px 10px;
  border-radius: 10px;
  outline: none;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: var(--white-color)
}

`;
