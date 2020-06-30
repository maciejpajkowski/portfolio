import React from 'react';
import styled from 'styled-components';

const ProjectsListItemContainer = styled.div`
    border-bottom: 3px solid #1ac966;
    width: 30%;
    height: 11rem;
    cursor: pointer;
    transition: all 0.3s;
    margin: 1rem;

    &:hover {
        box-shadow: 0 2px 2px 1px #222;
        transform: translateY(-3px);
    }
`;

const ProjectsListItemImage = styled.div`
    display: flex;
    height: 70%;
    background: ${props => props.image ? 'url(' + props.image + ')' : '#000'};
    background-size: cover;
    background-position: center;
`;

const ProjectsListItemInfo = styled.div`
    display: flex;
    background: #292929;
    height: 30%;
`

const ProjectsListItem = ({ title, description, image }) => {
    return (
        <ProjectsListItemContainer>
            <ProjectsListItemImage image={image} />
            <ProjectsListItemInfo>
                <div>ICO</div>
                <div>
                    <span>{title}</span>
                    <span>{description}</span>
                </div>
            </ProjectsListItemInfo>
        </ProjectsListItemContainer>
    )
}

export default ProjectsListItem;