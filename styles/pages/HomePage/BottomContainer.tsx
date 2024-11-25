import styled from "styled-components";

const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 60%;

    h2 {
        text-align: center;
    }

    @media (max-width: 480px) {
        margin-top: 0.6em;
        height: 60%;

        h2 {
            margin: 0.6em;
            text-decoration-line: underline;
        }
    }
`;

export default BottomContainer;
