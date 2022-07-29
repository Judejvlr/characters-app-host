import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
     font-family: sans-serif;
}

body{
 max-width: 100vw;
 background-color: ${props => props.theme.palette.background.dark};
}

`;