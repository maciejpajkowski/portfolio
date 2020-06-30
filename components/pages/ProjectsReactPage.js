import React from 'react';
import styled from 'styled-components';
import ProjectsList from '../ProjectsList';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const GET_PROJECTS_DATA = gql`
{
    user(login: "maciejpajkowski") {
        repositories(first: 50, privacy: PUBLIC, orderBy: { field: UPDATED_AT, direction: DESC }) {
            edges {
                node {
                    id
                    name
                    description
                    openGraphImageUrl
                    url
                    homepageUrl
                    repositoryTopics(first: 1) {
                        edges {
                            node {
                                topic {
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
`;

const StyledProjectsReactPage = styled.div`
    display: flex;
    /* padding: 1rem; */
    width: 100%;
    height: 100%;
`;

const ProjectsReactPage = () => {
    const { loading, error, data } = useQuery(GET_PROJECTS_DATA);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :C</p>;

    console.log(data);

    const getProjects = (tech) => {
        let projectsList = [];

        switch(tech) {
            case "react":
                projectsList = data.user.repositories.edges.filter((item) => {
                    return item.node.repositoryTopics.edges[0].node.topic.name === "react";
                });
                return projectsList;
            default:
                return projectsList;
        }
    }

    console.log(getProjects("react"));

    return (
        <StyledProjectsReactPage>
            <ProjectsList data={getProjects("react")} />
        </StyledProjectsReactPage>
    )
}

export default ProjectsReactPage;