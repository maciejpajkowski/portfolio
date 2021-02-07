import styled from "styled-components";

const Image = styled.div`
    height: 100%;
    width: 100%;
    background: url(${(props) => props.image});
    background-size: cover;
    background-position: left top;
`;

export default Image;
