import React from "react";
import DisplayCase from "../DisplayCase";
import MainContainer from "../../styles/pages/HomePage/MainContainer";
import TopContainer from "../../styles/pages/HomePage/TopContainer";
import BottomContainer from "../../styles/pages/HomePage/BottomContainer";
import { gql, useQuery } from "@apollo/client";

const GET_HOMEPAGE_DATA = gql`
	{
		user(login: "maciejpajkowski") {
			repositories(first: 1, orderBy: { field: UPDATED_AT, direction: DESC }) {
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

const HomePage = () => {
	const { loading, error, data } = useQuery(GET_HOMEPAGE_DATA);

	if (loading) return <p style={{ padding: 1 + "rem" }}>Loading...</p>;
	if (error) return <p style={{ padding: 1 + "rem" }}>Error :C</p>;

	const projectImage = data.user.repositories.edges[0].node.openGraphImageUrl;
	const projectName = data.user.repositories.edges[0].node.name;
	const projectDescription = data.user.repositories.edges[0].node.description;
	const projectType =
		data.user.repositories.edges[0].node.repositoryTopics.edges[0]?.node.topic
			.name;
	const projectRepoLink = data.user.repositories.edges[0].node.url;
	const projectLiveLink = data.user.repositories.edges[0].node.homepageUrl;

	return (
		<MainContainer>
			<TopContainer>
				<h1>Hello there!</h1>
				<p>
					Welcome to my personal portfolio website! Here you can find all basic
					information about my projects.
					<br />
					Currently, all their data is being downloaded directly from their
					respective GitHub repositories using GraphQL.
				</p>
				<p>Feel free to explore all categories available on the left.</p>
			</TopContainer>
			<BottomContainer>
				<h2>Last updated project:</h2>
				<DisplayCase
					image={projectImage}
					title={projectName}
					description={projectDescription}
					type={projectType}
					repoLink={projectRepoLink}
					liveLink={projectLiveLink}
					isModal={false}
					onClick={null}
				/>
			</BottomContainer>
		</MainContainer>
	);
};

export default HomePage;
