import styled from "styled-components";

const Image = styled.div<{ $image: string; }>`
    display: flex;
    height: 65%;
    background: ${(props) => (props.$image ? "url(" + props.$image + ")" : "#000")};
    background-size: cover;
    background-position: center;
`;

export default Image;
