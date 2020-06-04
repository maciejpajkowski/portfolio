import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const StyledHeader = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 15fr 5fr;

`;

const StyledHeaderFlex = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 0 1rem 1rem;

    @media (max-width: 1366px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-left: 0;
    }
`;

const StyledHeaderAvatarFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledHeaderAvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
    border: 2px solid #1ac966;
    overflow: hidden;
    box-sizing: content-box;
    padding: 0.3rem;

    @media (max-width: 1700px) {
        width: 4rem;
        height: 4rem;
    }
`;

const StyledHeaderAvatar = styled.div`
    background: url('./static/me.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    border-radius: 100%;
`;

const StyledHeaderNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    justify-content: center;
    flex-grow: 0.7;

    @media (max-width: 1366px) {
        margin: 0;
    }
`;

const StyledName = styled.h1`
    font-size: 26px;
    font-weight: 800;
    margin: 0;

    @media (max-width: 1700px) {
        font-size: 22px
    }
`;

const StyledSpan = styled.span`
    color: #888;

    @media (max-width: 1700px) {
        font-size: 12px
    }
`;

const StyledInfoBar = styled.div`
    font-size: 26px;
    background: #222;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const StyledGithubIcon = styled.a`
    text-decoration-line: none;
    color: inherit;
    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        color: #662299;
    }
`;

const StyledLinkedinIcon = styled.a`
    text-decoration-line: none;
    color: inherit;
    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        color: #1144ff;
    }
`;

const StyledMailIcon = styled.a`
    text-decoration-line: none;
    color: inherit;
    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        color: #22aa55;
    }
`;


const Header = () => (
    <StyledHeader>
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
        <StyledInfoBar>
            <StyledGithubIcon href="https://github.com/maciejpajkowski" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </StyledGithubIcon>
            <StyledLinkedinIcon href="https://www.linkedin.com/in/maciej-pajkowski/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
            </StyledLinkedinIcon>
            <StyledMailIcon href="mailto:maciej.pajkowski@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
            </StyledMailIcon>
        </StyledInfoBar>
    </StyledHeader>
);

export default Header;