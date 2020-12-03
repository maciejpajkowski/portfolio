import React, { useState } from 'react';
import Head from 'next/head';
import StyledContainer from '../components/StyledContainer';
import StyledSidebarContainer from '../components/StyledSidebarContainer';
import StyledContentContainer from '../components/StyledContentContainer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ContentTemplate from '../components/ContentTemplate';

const Layout = ({ pageTitle, headerText, children }) => {
	const [ sidebarOpen, setSidebarOpen ] = useState(true);

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<StyledContainer>
				<StyledSidebarContainer isOpen={sidebarOpen}>
					<Header setSidebarOpen={setSidebarOpen} />
					<Sidebar />
				</StyledSidebarContainer>
				<StyledContentContainer>
					<ContentTemplate headerText={headerText} setSidebarOpen={setSidebarOpen}>
						{children}
					</ContentTemplate>
				</StyledContentContainer>
			</StyledContainer>
		</>
	)
};

export default Layout;