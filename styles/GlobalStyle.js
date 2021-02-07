import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    
    body {
        background: url('/background.png');
        background-position: center;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        margin: 0;
        font-size: 18px;
        font-family: 'Lato', 'Verdana', 'Arial';
        overflow: hidden;

        @media (max-height: 768px) {
            font-size: 16px;
        }

        @media (max-width: 1600px) {
            font-size: 16px;
        }

        @media (max-width: 600px) {
            font-size: 14px;
        }
    }

    #__next {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ReactModal__Overlay {
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }

    .ReactModal__Overlay--after-open {
        opacity: 1;
    }

    .ReactModal__Overlay--before-close {
        opacity: 0;
    }

    .ReactModal__Content {
        transition: all 0.3s ease-in-out;
        transform: scale(0.8);
    }

    .ReactModal__Content--after-open {
        transform: scale(1);
    }

    .ReactModal__Content--before-close {
        transform: scale(0.8);
    }

`;

export default GlobalStyle;
