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

const ProjectsList = (props) => {
    return (
        <StyledProjectsList>
            <ProjectsListItem key="1" />
            <ProjectsListItem key="2" />
            <ProjectsListItem key="3" />
            <ProjectsListItem key="4" />
            <ProjectsListItem key="5" />
            <ProjectsListItem key="65" />
            <ProjectsListItem key="7" />
            <ProjectsListItem key="85" />
            <ProjectsListItem key="05" />
            <ProjectsListItem key="75" />
            <ProjectsListItem key="175" />
            <ProjectsListItem key="755" />
            <ProjectsListItem key="725" />
        </StyledProjectsList>
    )
}

export default ProjectsList;