import styled from "styled-components";

const FlexContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 1em;

    @media (max-width: 1440px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-left: 0;
    }

    @media (max-width: 768px) {
        flex-direction: row;
    }
`;

export default FlexContainer;
