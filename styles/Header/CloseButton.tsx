import styled from "styled-components";

const CloseButton = styled.button`
    display: none;
    position: absolute;
    right: 3%;
    top: 0.5em;
    outline: 0;
    border: 0;
    line-height: 1em;
    background: none;
    font-size: 1.4em;
    color: #1ac966;
    transition: all 0.3s;
    cursor: pointer;

    &:active {
        color: #eee;
        border-color: #eee;
    }

    @media (max-width: 768px) {
        display: inline-block;
    }
`;

export default CloseButton;
