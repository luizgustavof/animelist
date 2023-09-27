import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        border: 0;
        font-family: 'Poppins';
        box-sizing: border-box;
        font-size: 62%;
        outline: 0;
    }

    #root {
        width: 100%;
        height: 100vh;
        background-size: cover;
    }

    img {
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
        -webkit-touch-callout: none;
    }   

`