import styled from "styled-components";

const ImageContainer = styled.div`
    border: 2px solid #1ac966;
    height: 100%;
    width: 95%;
    overflow: hidden;
    margin-bottom: 2rem;

    @media (max-width: 480px) {
        margin-bottom: 16px;
        height: 200px;
    }
`;

export default ImageContainer;
