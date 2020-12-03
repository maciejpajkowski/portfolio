import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledContentHeader = styled.header`
    background: #292929;
    text-align: center;
    line-height: 3rem;
    font-size: 26px;
`;

const StyledOpenButton = styled.button`
    display: none;
    position: absolute;
    left: 5%;
    top: 1%;
    outline: 0;
    line-height: 1.8rem;
    background: none;
    font-size: 1.6rem;
    color: #1ac966;
    transition: all 0.3s;

    &:active {
        color: #eee;
        border-color: #eee;
    }

    @media (max-width: 768px) {
        display: inline-block;
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