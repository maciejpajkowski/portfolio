import React, { useState } from "react";
import Head from "next/head";
import MainContainer from "./MainContainer";
import SidebarContainer from "./SidebarContainer";
import ContentContainer from "./ContentContainer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ContentTemplate from "../components/ContentTemplate";

const Layout = ({ pageTitle, headerText, children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"></meta>
            </Head>
            <MainContainer>
                <SidebarContainer isOpen={sidebarOpen}>
                    <Header setSidebarOpen={setSidebarOpen} />
                    <Sidebar setSidebarOpen={setSidebarOpen} />
                </SidebarContainer>
                <ContentContainer>
                    <ContentTemplate headerText={headerText} setSidebarOpen={setSidebarOpen}>
                        {children}
                    </ContentTemplate>
                </ContentContainer>
            </MainContainer>
        </>
    );
};

export default Layout;
