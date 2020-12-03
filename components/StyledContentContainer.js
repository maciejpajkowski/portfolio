import styled from 'styled-components';

const StyledContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100%;
    width: 100%;
    /* border-left: 1px solid #222; */
    background: linear-gradient(120deg, rgba(51,51,51,1) 0%, rgba(63,63,63,1) 50%, rgba(91,91,91,1) 100%);
    background-blend-mode: multiply;
    
    @media (max-width: 600px) {
        overflow: auto;
    }

    @media (max-width: 480px) {
        height: 100%;
    }
`;

export default StyledContentContainer;