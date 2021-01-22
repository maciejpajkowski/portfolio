import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fixDescriptionLength from '../utils/fixDescriptionLength';
import getAdequateIcon from '../utils/getAdequateIcon';

const StyledProjectsListItemContainer = styled.div`
    border-bottom: 3px solid #1ac966;
    height: 15.5rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        box-shadow: 0 2px 2px 1px #222;
        transform: translateY(-3px);
        border-bottom: 3px solid ${props => {
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
    }
`;

const StyledProjectsListItemImage = styled.div`
    display: flex;
    height: 70%;
    background: ${props => props.image ? 'url(' + props.image + ')' : '#000'};
    background-size: cover;
    background-position: center;
`;

const StyledProjectsListItemInfo = styled.div`
    display: flex;
    background: #292929;
    height: 30%;
    overflow: hidden;
`

const StyledProjectsListItemIcon = styled.div`
    display: flex;
    font-size: 2rem;
    margin: 0 0.6rem;
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
    justify-content: center;
    align-items: center;
`;

const StyledProjectsListItemTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledProjectsListItemTitle = styled.h3`
    margin: 0.3rem 0 0 0;
    font-size: 1.1rem;
`;

const StyledProjectsListItemDescription = styled.span`
    font-size: 0.8rem;
    margin-right: 0.1rem;
    overflow-wrap: break-word;
    word-break: break-word;
`;

const ProjectsListItem = ({ title, description, image, type, onClick }) => {

    return (
        <StyledProjectsListItemContainer type={type} onClick={onClick}>
            <StyledProjectsListItemImage image={image} />
            <StyledProjectsListItemInfo>
                <StyledProjectsListItemIcon type={type}>
                    <FontAwesomeIcon icon={getAdequateIcon(type)} />
                </StyledProjectsListItemIcon>
                <StyledProjectsListItemTextContainer>
                    <StyledProjectsListItemTitle>{title}</StyledProjectsListItemTitle>
                    <StyledProjectsListItemDescription>{fixDescriptionLength(description)}</StyledProjectsListItemDescription>
                </StyledProjectsListItemTextContainer>
            </StyledProjectsListItemInfo>
        </StyledProjectsListItemContainer>
    )
}

export default ProjectsListItem;