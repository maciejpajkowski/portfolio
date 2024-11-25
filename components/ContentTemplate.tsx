import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Header from "../styles/ContentTemplate/Header";
import OpenButton from "../styles/ContentTemplate/OpenButton";

const ContentTemplate = ({ headerText, children, setSidebarOpen }) => {
    return (
        <>
            <Header>
                <OpenButton onClick={() => setSidebarOpen(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </OpenButton>
                {headerText}
            </Header>
            {children}
        </>
    );
};

export default ContentTemplate;
