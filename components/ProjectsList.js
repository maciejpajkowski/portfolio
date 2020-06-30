import React from 'react';
import styled from 'styled-components';
import ProjectsListItem from './ProjectsListItem';

const StyledProjectsList = styled.div`
    display: flex;
    height: 85vh;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    overflow: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }
`;

const ProjectsList = ({ data }) => {
    return (
        <StyledProjectsList>
            {data.map((project) => {
                return (
                    <ProjectsListItem
                        image={project.node.openGraphImageUrl}
                        title={project.node.name}
                        description={project.node.description}
                        key={project.node.name}
                    />
                )
            })}
        </StyledProjectsList>
    )
}

export default ProjectsList;