import styled from "styled-components";

const HalfContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 8px;

    &:nth-child(1) {
        padding-left: 1rem;
        padding-right: 1rem;

        @media (max-width: 540px) {
            width: 100%;
            padding: 0;
        }
    }

    &:nth-child(2) {
        padding-right: 1rem;
        display: flex;
        align-items: center;

        @media (max-width: 540px) {
            width: 100%;
        }

        @media (min-height: 720px) {
            height: auto;
        }

        @media (max-width: 540px) and (min-height: 720px) {
            height: 25vh;
        }
    }

    @media (max-width: 480px) {
        margin-top: 0;
    }
`;

export default HalfContainer;
