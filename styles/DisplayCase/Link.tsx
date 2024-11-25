import styled from "styled-components";

const Link = styled.a`
    display: flex;
    align-items: center;
    font-size: 20px;
    text-decoration-line: none;
    color: inherit;

    svg {
        margin-right: 0.6rem;
        font-size: 1.6em;
    }

    span {
        font-size: 1.6em;
    }

    @media (max-width: 1600px) {
        svg,
        span {
            font-size: 1.3em;
        }
    }

    @media (max-width: 1366px) {
        svg,
        span {
            font-size: 1em;
        }
        svg {
            margin-right: 0.4em;
        }
    }
`;

export default Link;
