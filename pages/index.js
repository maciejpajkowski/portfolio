import Head from 'next/head';
import StyledContainer from '../components/StyledContainer';
import StyledSidebarContainer from '../components/StyledSidebarContainer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const IndexPage = () => (
  	<>
		<Head>
			<title>My Portfolio</title>
		</Head>
    	<StyledContainer>
			<StyledSidebarContainer>
				<Header />
				<Sidebar />
			</StyledSidebarContainer>
			<div>bruhbruh</div>
		</StyledContainer>
  	</>
)

export default IndexPage;
