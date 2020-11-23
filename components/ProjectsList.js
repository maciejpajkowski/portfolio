import React from 'react';
import styled from 'styled-components';
import ProjectsListItem from './ProjectsListItem';

const StyledProjectsList = styled.div` 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3, minmax(15rem, auto));
    height: 85vh;
    max-height: 100%;
    width: 100%;
    overflow: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }
`; // ^ GRID OPTION

// const StyledProjectsList = styled.div` 
//     display: flex;
//     height: 85vh;
//     justify-content: space-evenly;
//     flex-wrap: wrap;
//     width: 100%;
//     overflow: auto;
//     -ms-overflow-style: none;  /* IE and Edge */
//     scrollbar-width: none;  /* Firefox */

//     &::-webkit-scrollbar {
//         display: none;
//     }
// `; // ^ FLEX OPTION

const ProjectsList = ({ data }) => {
    return (
        <StyledProjectsList>
            {data.map((project) => {
                return (
                    <ProjectsListItem
                        image={project.node.openGraphImageUrl}
                        title={project.node.name}
                        description={project.node.description}
                        type={project.node.repositoryTopics.edges[0].node.topic.name}
                        key={project.node.name}
                    />
                )
            })}
        </StyledProjectsList>
    )
}

export default ProjectsList;