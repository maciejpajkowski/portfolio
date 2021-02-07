import styled from "styled-components";

const Button = styled.button`
    background: inherit;
    color: ${(props) => {
        if (!!props.repoLink) {
            return "#257f5c";
        } else if (!!props.liveLink) {
            return "#1ac966";
        } else {
            return "#ddd";
        }
    }};

    border: 2px solid
        ${(props) => {
            if (!!props.repoLink) {
                return "#257f5c";
            } else if (!!props.liveLink) {
                return "#1ac966";
            } else {
                return "#ddd";
            }
        }};

    border-radius: 0.3rem;
    outline: none;
    cursor: pointer;
    padding: 0.5rem;
    margin-bottom: 2rem;
    margin-right: 2rem;
    transition: all 0.3s;

    &:hover {
        background: ${(props) => {
            if (!!props.repoLink) {
                return "#257f5c";
            } else if (!!props.liveLink) {
                return "#1ac966";
            } else {
                return "#ddd";
            }
        }};
        color: #333;
    }

    &:active {
        background: #eee;
        border-color: #eee;
        color: ${(props) => {
            if (!!props.repoLink) {
                return "#257f5c";
            } else if (!!props.liveLink) {
                return "#1ac966";
            } else {
                return "#000";
            }
        }};
    }

    @media (max-width: 480px) {
        margin-right: 1em;
        margin-bottom: 1em;
    }
`;

export default Button;
