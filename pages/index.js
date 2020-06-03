import Layout from '../styles/Layout';
import HomePage from '../components/pages/HomePage';

const IndexPage = () => {
	return (
		<Layout 
			pageTitle="Home - Maciej Pajkowski"
			headerText="Home"
		>
			<HomePage />
		</Layout>
	)
}

export default IndexPage;
