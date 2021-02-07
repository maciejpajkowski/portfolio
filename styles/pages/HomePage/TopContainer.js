import styled from "styled-components";

const TopContainer = styled.div`
    display: flex;
    height: 40%;
    padding-right: 1rem;
    flex-direction: column;
    border-bottom: 2px solid #1ac966;

    @media (max-width: 480px) {
        h1 {
            margin: 0.6em 0;
        }

        p {
            margin: 0.4em 0;
        }
    }

    @media (max-height: 600px) {
        h1 {
            margin: 0.4em 0;
        }

        p {
            margin: 0.2em 0;
        }
    }
`;

export default TopContainer;
