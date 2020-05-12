import React from 'react';
import styled from 'styled-components';

const StyledHeaderCenter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledHeaderGrid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
`

const Header = () => (
    <StyledHeaderCenter>
        <StyledHeaderGrid>
            <StyledHeaderCenter>
                bruh
            </StyledHeaderCenter>
            <StyledHeaderCenter>
                bruh
            </StyledHeaderCenter>
        </StyledHeaderGrid>
    </StyledHeaderCenter>
);

export default Header;