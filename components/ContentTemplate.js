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
        width: 100%;
        font-size: 20px;
    }
`;

const StyledOpenButton = styled.button`
    display: none;
    position: fixed;
    left: 2%;
    top: 1.3%;
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
        left: 5%;
    }

    @media (max-width: 600px) {
        left: 2%;
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