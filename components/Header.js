import React from 'react';
import styled from 'styled-components';

const StyledHeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledHeaderFlex = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const StyledHeaderAvatarContainer = styled.div`
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
    border: 3px solid #119922;
    z-index: 2;
    overflow: hidden;
`;

const StyledHeaderAvatarFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0.3;
`;

const StyledHeaderAvatar = styled.div`
    background: url('./static/me.jpg');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
`;

const StyledHeaderNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    justify-content: center;
    flex-grow: 0.7;
`;

const StyledName = styled.h1`
    font-size: 26px;
    font-weight: 800;
    margin: 0;
`;

const StyledSpan = styled.span`
    color: #888;    
`;

const Header = () => (
    <StyledHeaderContainer>
        <StyledHeaderFlex>
            <StyledHeaderAvatarFlex>
                <StyledHeaderAvatarContainer>
                    <StyledHeaderAvatar />
                </StyledHeaderAvatarContainer>
            </StyledHeaderAvatarFlex>
            <StyledHeaderNameContainer>
                <StyledName>
                    Maciej Pajkowski
                </StyledName>
                <StyledSpan>
                    Software developer
                </StyledSpan>
            </StyledHeaderNameContainer>
        </StyledHeaderFlex>
    </StyledHeaderContainer>
);

export default Header;