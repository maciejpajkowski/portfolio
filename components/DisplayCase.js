import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import getAdequateIcon from '../utils/getAdequateIcon';
import getAdequateText from '../utils/getAdequateText';

const StyledDisplayCaseContainer = styled.div`
    display: flex;
    height: 100%;
`;

const StyledDisplayCaseHalfContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 8px;

    &:nth-child(1) {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    &:nth-child(2) {
        padding-right: 1rem;
        display: flex;
        align-items: center;
        /* justify-content: center; */
    }
`;

const StyledDisplayCaseTitle = styled.h3`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    margin: 0 1.4rem 1rem 0;
`;

const StyledDisplayCaseProject = styled.div`
    display: flex;
    align-items: center;
`;

const StyledDisplayCaseProjectLogo = styled.div`
    color: ${props => {
        switch(props.type) {
            case "react":
                return '#30b7ff';
            case "javascript":
                return '#ffee03';
            case "html":
                return '#ff4900';
            case "dotnet":
                return '#476cff';
            case "other":
                return '#b247ff';
        }
    }};
    margin-right: 0.5rem;
`;

const StyledDisplayCaseProjectType = styled.span`
    font-size: 16px;
`;

const StyledDisplayCaseDescription = styled.p`
    font-size: 18px;
    word-wrap: break-word;
`;

const StyledDisplayCaseButtonContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: flex-end;
    justify-content: flex-start;
`;

const StyledDisplayCaseLink = styled.a`
    display: flex;
    align-items: center;
    font-size: 20px;
    text-decoration-line: none;
    color: inherit;

    svg {
        margin-right: 0.6rem;
        font-size: 24px;
    }

    span {
        font-size: 20px;
    }
`;

const StyledDisplayCaseButton = styled.button`
    background: inherit;
    color: ${props => {
        if (!!props.repoLink) {
            return '#257f5c';
        } else if (!!props.liveLink) {
            return '#1ac966';
        } else {
            return '#ddd';
        }
    }};

    border: 2px solid ${props => {
        if (!!props.repoLink) {
            return '#257f5c';
        } else if (!!props.liveLink) {
            return '#1ac966';
        } else {
            return '#ddd';
        }
    }};
    
    border-radius: 0.3rem;
    outline: none;
    cursor: pointer;
    padding: 0.5rem;
    margin-bottom: 2rem;
    margin-right: 2rem;
    transition: all 0.3s;

    &:hover {
        background: ${props => {
            if (!!props.repoLink) {
                return '#257f5c';
            } else if (!!props.liveLink) {
                return '#1ac966';
            } else {
                return '#ddd';
            }
        }};
        color: #333;
    }

    &:active {
        background: #eee;
        border-color: #eee;
        color: ${props => {
            if (!!props.repoLink) {
                return '#257f5c';
            } else if (!!props.liveLink) {
                return '#1ac966';
            } else {
                return '#000';
            }
        }};
    }
`;

const StyledDisplayCaseImageContainer = styled.div`
    border: 2px solid #1ac966;
    height: 100%;
    width: 95%;
    overflow: hidden;
    margin-bottom: 2rem;
`;

const StyledDisplayCaseImage = styled.div`
    height: 100%;
    width: 100%;
    background: url(${props => props.image});
    background-size: cover;
    background-position: left top;
`;

const StyledCloseButton = styled(StyledDisplayCaseButton)`
    display: ${props => props.isModal ? 'inline-block' : 'none'};
    font-size: 1rem;
    line-height: 1rem;
    height: 2.2rem;
    position: absolute;
    right: -1.5rem;
    top: 0.5rem;
    color: #eee;
    border: none;
`;

const DisplayCase = ({ title, description, type, repoLink, liveLink, image, isModal, onClick }) => {

    return (
        <StyledDisplayCaseContainer>
            <StyledDisplayCaseHalfContainer>
                <StyledDisplayCaseTitle>
                    {title}
                    <StyledDisplayCaseProject>
                        <StyledDisplayCaseProjectLogo type={type}>
                            <FontAwesomeIcon icon={getAdequateIcon(type)} />
                        </StyledDisplayCaseProjectLogo>
                        <StyledDisplayCaseProjectType>
                            {getAdequateText(type)}
                        </StyledDisplayCaseProjectType>
                    </StyledDisplayCaseProject>
                </StyledDisplayCaseTitle>
                <StyledDisplayCaseDescription>
                    {description}
                </StyledDisplayCaseDescription>
                <StyledDisplayCaseButtonContainer>
                    <StyledDisplayCaseLink href={repoLink + "/blob/master/README.md"} target="_blank">
                        <StyledDisplayCaseButton>
                            <FontAwesomeIcon icon={faFileAlt} />
                            <span>Read more</span>
                        </StyledDisplayCaseButton>
                    </StyledDisplayCaseLink>
                    <StyledDisplayCaseLink href={repoLink} target="_blank">
                        <StyledDisplayCaseButton repoLink>
                                <FontAwesomeIcon icon={faGithub} />
                                <span>Repo</span>
                        </StyledDisplayCaseButton>
                    </StyledDisplayCaseLink>
                    <StyledDisplayCaseLink href={liveLink} target="_blank">
                        <StyledDisplayCaseButton liveLink>
                                <FontAwesomeIcon icon={faGlobeEurope} />
                                <span>Live</span>
                        </StyledDisplayCaseButton>
                    </StyledDisplayCaseLink>
                    <StyledDisplayCaseLink onClick={onClick}>
                        <StyledCloseButton isModal={isModal}>
                                <span>X</span>
                        </StyledCloseButton>
                    </StyledDisplayCaseLink>
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