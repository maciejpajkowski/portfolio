import styled from 'styled-components';

const StyledContainer = styled.div`
    box-shadow: 0px 2px 5px 0px #313131;
    box-sizing: border-box;
    height: 92%;
    width: 80%;
    background: #333;
    color: #eee;
    display: grid;
    grid-template-columns: 2fr 6fr;

    @media (max-width: 768px) {
        display: block;
        width: 94%;
        height: 100%;
    }

    @media (max-width: 600px) {
        display: block;
        width: 100%;
        height: 100%;
    }
`;

export default StyledContainer;