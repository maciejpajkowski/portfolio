import React from 'react';
import styled from 'styled-components';

const StyledContentHeader = styled.header`
    background: #292929;
    text-align: center;
    line-height: 3rem;
    font-size: 26px;
`;

const Content = ({ headerText, children }) => {
    return (
        <>
            <StyledContentHeader>
                {headerText}
            </StyledContentHeader>
            {children}
        </>
    )
}

export default Content;