import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');

    html, body {
        font-family: 'Nunito Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    h1, h2, h3, p, div{
        letter-spacing: 1px;
        line-height: 1.5;
    }

`;

export default GlobalStyle;
