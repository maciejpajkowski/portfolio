import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledContentHeader = styled.header`
    background: #292929;
    text-align: center;
    line-height: 2em;
    font-size: 26px;

    @media (max-width: 768px) {
        position: fixed;
        width: 94%;
        font-size: 20px;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

const StyledOpenButton = styled.button`
    display: none;
    position: fixed;
    left: 10px;
    top: 10px;
    outline: 0;
    border: 0;
    line-height: 1em;
    background: none;
    font-size: 1em;
    color: #1ac966;
    transition: all 0.3s;
    cursor: pointer;

    &:active {
        color: #eee;
        border-color: #eee;
    }

    @media (max-width: 768px) {
        display: inline-block;
        left: 10px;
    }

    @media (height: 720px) and (width: 540px) { /* Surface */
        left: 5%;
    }

    @media (height: 1024px) and (width: 768px) { /* iPad */
        top: 5%;
        left: 4.4%;
    }
`

const ContentTemplate = ({ headerText, children, setSidebarOpen }) => {
    return (
        <>
            <StyledContentHeader>
                <StyledOpenButton onClick={() => setSidebarOpen(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </StyledOpenButton>
                {headerText}
            </StyledContentHeader>
            {children}
        </>
    )
}

export default ContentTemplate;