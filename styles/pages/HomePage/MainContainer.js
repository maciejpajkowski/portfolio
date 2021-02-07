import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;

    @media (max-width: 768px) {
        margin-top: 2em;
    }
`;

export default MainContainer;
