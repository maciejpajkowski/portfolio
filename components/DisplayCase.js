import React from 'react';
import styled from 'styled-components';

const StyledDisplayCaseContainer = styled.div`
    display: flex;
`;

const StyledDisplayCaseTitle = styled.h3`
    color: #bbb;
`;

const StyledDisplayCaseImage = styled.div`
    height: 10rem;
    width: 10rem;
    background: url(${props => props.image});
`;

const DisplayCase = ({ title, description, repoLink, liveLink, image }) => {
    return (
        <StyledDisplayCaseContainer>
            <StyledDisplayCaseTitle>
                {title}
            </StyledDisplayCaseTitle>
            <StyledDisplayCaseImage image={image} />
        </StyledDisplayCaseContainer>
    )
}

export default DisplayCase;