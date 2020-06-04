import React from 'react';
import styled from 'styled-components';

const StyledDisplayCaseContainer = styled.div`
    display: flex;
    height: 80%;
`;

const StyledDisplayCaseHalfContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;

    &:nth-child(1) {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    &:nth-child(2) {
        padding-right: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const StyledDisplayCaseTitle = styled.h3`
    font-size: 24px;
    margin: 1rem 0 1rem 0;
`;

const StyledDisplayCaseDescription = styled.p`
    font-size: 20px;
`;

const StyledDisplayCaseButtonContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: flex-end;
    justify-content: space-around;
`;

const StyledDisplayCaseButton = styled.button`
    background: inherit;
    color: ${props => !!props.repoLink ? 'red' : 'lightblue'};
    border: 1px solid ${props => !!props.repoLink ? 'red' : 'lightblue'};
    outline: none;
    cursor: pointer;
    margin-bottom: 3rem;
`;

const StyledDisplayCaseImageContainer = styled.div`
    border: 3px solid #257f5c;
    border-radius: 0.5rem;
    height: 85%;
    width: 95%;
    box-sizing: content-box;
    padding: 0.2rem;
`;

const StyledDisplayCaseImage = styled.div`
    height: 99%;
    width: 99%;
    background: url(${props => props.image});
    background-size: cover;
    background-position: center;
    border: 2px solid #333;
    border-radius: 0.5rem;
`;

const DisplayCase = ({ title, description, repoLink, liveLink, image }) => {
    return (
        <StyledDisplayCaseContainer>
            <StyledDisplayCaseHalfContainer>
                <StyledDisplayCaseTitle>
                    {title}
                </StyledDisplayCaseTitle>
                <StyledDisplayCaseDescription>
                    {description}
                </StyledDisplayCaseDescription>
                <StyledDisplayCaseButtonContainer>
                    <StyledDisplayCaseButton>
                        Repo link
                    </StyledDisplayCaseButton>
                    <StyledDisplayCaseButton>
                        Live link
                    </StyledDisplayCaseButton>
                </StyledDisplayCaseButtonContainer>
            </StyledDisplayCaseHalfContainer>
            <StyledDisplayCaseHalfContainer>
                <StyledDisplayCaseImageContainer>
                    <StyledDisplayCaseImage image={image} />
                </StyledDisplayCaseImageContainer>
            </StyledDisplayCaseHalfContainer>
        </StyledDisplayCaseContainer>
    )
}

export default DisplayCase;