import Head from 'next/head';
import StyledContainer from '../components/StyledContainer';
import StyledSidebar from '../components/StyledSidebar';
import Header from '../components/Header';

const IndexPage = () => (
  	<>
		<Head>
			<title>My Portfolio</title>
		</Head>
    	<StyledContainer>
			<StyledSidebar>
				<Header />
			</StyledSidebar>
			<div>bruhbruh</div>
		</StyledContainer>
  	</>
)

export default IndexPage;
