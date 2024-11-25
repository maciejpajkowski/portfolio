import styled from "styled-components";

const OpenButton = styled.button`
    display: none;
    position: fixed;
    left: 10px;
    top: 10px;
    outline: 0;
    border: 0;
    line-height: 1em;
    background: none;
    font-size: 1em;
    color: #1ac966;
    transition: all 0.3s;
    cursor: pointer;

    &:active {
        color: #eee;
        border-color: #eee;
    }

    @media (max-width: 768px) {
        display: inline-block;
        left: 10px;
    }

    @media (height: 720px) and (width: 540px) {
        /* Surface */
        left: 5%;
    }

    @media (height: 1024px) and (width: 768px) {
        /* iPad */
        top: 5%;
        left: 4.4%;
    }
`;

export default OpenButton;
