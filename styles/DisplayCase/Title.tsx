import styled from "styled-components";

const Title = styled.h3`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    margin: 0 1.4rem 1rem 0;

    @media (max-width: 540px) {
        font-size: 16px;
    }
`;

export default Title;
