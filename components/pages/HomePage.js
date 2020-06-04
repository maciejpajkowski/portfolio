import React from 'react';
import styled from 'styled-components';
import DisplayCase from '../DisplayCase';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const GET_IMAGE = gql`
	{
		repository(owner: "maciejpajkowski", name: "carmechanic") {
			openGraphImageUrl
		}
	}
`;

const StyledHomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
`;

const StyledHomePageTopContainer = styled.div`
    display: flex;
    height: 40%;
    padding-right: 1rem;
    flex-direction: column;
    border-bottom: 2px solid #222;
`;

const StyledHomePageBottomContainer = styled.div`
    height: 60%;
    
    h2 {
        text-align: center;
    }
`;

const HomePage = () => {
	const { loading, error, data } = useQuery(GET_IMAGE);

	if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :C</p>;
    
    console.log(data);
    
    return (
        <StyledHomePageContainer>
            <StyledHomePageTopContainer>
                <h1>Hello there!</h1>
                <p>Welcome to my personal website! Here you can find all basic information about my projects. 
                <br />
                Currently, all their data is being downloaded directly from their respective GitHub 
                repositories using GraphQL.</p>
                <p>Feel free to explore all categories available on the left.</p>
            </StyledHomePageTopContainer>
            <StyledHomePageBottomContainer>
                <h2>Newest project:</h2>
                <DisplayCase 
                    image={data.repository.openGraphImageUrl} 
                    title="carmechanic"
                    description="This is a very simple app coded in HTML and CSS using Bootstrap."
                />
            </StyledHomePageBottomContainer>
        </StyledHomePageContainer>
    )
}

export default HomePage;