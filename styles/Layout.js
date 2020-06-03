import React from 'react';
import Head from 'next/head';
import StyledContainer from '../components/StyledContainer';
import StyledSidebarContainer from '../components/StyledSidebarContainer';
import StyledContentContainer from '../components/StyledContentContainer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ContentTemplate from '../components/ContentTemplate';

const Layout = ({ pageTitle, headerText, children }) => (
    <>
		<Head>
			<title>{pageTitle}</title>
		</Head>
    	<StyledContainer>
			<StyledSidebarContainer>
				<Header />
				<Sidebar />
			</StyledSidebarContainer>
			<StyledContentContainer>
				<ContentTemplate headerText={headerText}>
					{children}
				</ContentTemplate>
			</StyledContentContainer>
		</StyledContainer>
  	</>
);

export default Layout;