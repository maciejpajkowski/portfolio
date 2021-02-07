import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
    overflow: auto;

    h2,
    h4,
    p {
        margin: 0.6em 0;
    }

    @media (max-width: 768px) {
        margin-top: 2em;

        h2,
        p {
            margin: 0.6em 0;
        }

        h4 {
            margin: 0.2em 0;
        }
    }

    @media (min-height: 1024px) {
        font-size: 18px;
    }
`;

export default Container;
