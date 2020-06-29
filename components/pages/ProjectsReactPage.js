import React from 'react';
import styled from 'styled-components';
import ProjectsList from '../ProjectsList';

const StyledProjectsReactPage = styled.div`
    display: flex;
    /* padding: 1rem; */
    width: 100%;
    height: 100%;
`;

const ProjectsReactPage = () => {
    return (
        <StyledProjectsReactPage>
            <ProjectsList />
        </StyledProjectsReactPage>
    )
}

export default ProjectsReactPage;