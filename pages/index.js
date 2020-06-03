import Layout from '../styles/Layout';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const GET_IMAGE = gql`
	{
		repository(owner: "maciejpajkowski", name: "carmechanic") {
			openGraphImageUrl
		}
	}
`;

const IndexPage = () => {
	const { loading, error, data } = useQuery(GET_IMAGE);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	
	return (
		<Layout 
			pageTitle="Home - Maciej Pajkowski"
			headerText="Home"
		>
			bruh
		</Layout>
	)
}

export default IndexPage;
