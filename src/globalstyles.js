import { createGlobalStyle } from "styled-components";

const GlobalStyle=createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    html, body{
        overflow-x: hidden;
    }


`
export default GlobalStyle;