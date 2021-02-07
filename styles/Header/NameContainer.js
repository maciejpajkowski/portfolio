import styled from "styled-components";

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    justify-content: center;
    flex-grow: 0.7;

    @media (max-width: 1366px) {
        margin: 0;
    }

    @media (max-width: 768px) {
        flex-grow: 0.2;
    }
`;

export default NameContainer;
