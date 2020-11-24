import React from 'react';
import styled from 'styled-components';
import ProjectsListItem from './ProjectsListItem';

const StyledPadding = styled.div`
    height: 0.1rem;
    width: 100%;
`;

const StyledProjectsList = styled.div` 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3, minmax(15rem, auto));
    grid-gap: 1rem 1rem;
    height: 85vh;
    max-height: 100%;
    overflow: auto;
    padding: 1rem 1rem 0 1rem;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }
`;

const ProjectsList = ({ data }) => {
    return (
        <>
            <StyledProjectsList>
                {data.map((project) => {
                    return (
                        <ProjectsListItem
                            image={project.node.openGraphImageUrl}
                            title={project.node.name}
                            description={project.node.description}
                            type={project.node.repositoryTopics.edges[0].node.topic.name}
                            key={project.node.id}
                        />
                    )
                })}
                <StyledPadding />
                <StyledPadding />
                <StyledPadding />
            </StyledProjectsList>
        </>
    )
}

export default ProjectsList;