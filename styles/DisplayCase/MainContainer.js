import styled from 'styled-components';

const StyledDisplayCaseContainer = styled.div`
    display: flex;
    height: 100%;

    @media (max-width: 540px) {
        flex-direction: column;
    }
`;

export default StyledDisplayCaseContainer;