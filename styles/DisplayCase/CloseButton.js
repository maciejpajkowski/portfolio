import styled from "styled-components";
import Button from "./Button";

const CloseButton = styled(Button)`
    display: ${(props) => (props.isModal ? "inline-block" : "none")};
    font-size: 0.8em;
    line-height: 1em;
    height: 2.2em;
    position: absolute;
    right: -1.5em;
    top: 0.5em;
    color: #eee;
    border: none;

    @media (max-width: 480px) {
        right: -0.6em;
    }
`;

export default CloseButton;
