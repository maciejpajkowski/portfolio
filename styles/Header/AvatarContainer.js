import styled from "styled-components";

const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.4em;
    height: 5.4em;
    border-radius: 100%;
    border: 2px solid #1ac966;
    overflow: hidden;
    box-sizing: content-box;
    padding: 0.3em;

    @media (max-width: 1700px) {
        width: 4em;
        height: 4em;
    }
`;

export default AvatarContainer;
