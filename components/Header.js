import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MainContainer from "../styles/Header/MainContainer";
import FlexContainer from "../styles/Header/FlexContainer";
import AvatarFlex from "../styles/Header/AvatarFlex";
import AvatarContainer from "../styles/Header/AvatarContainer";
import Avatar from "../styles/Header/Avatar";
import NameContainer from "../styles/Header/NameContainer";
import Name from "../styles/Header/Name";
import Span from "../styles/Header/Span";
import InfoBar from "../styles/Header/InfoBar";
import Icon from "../styles/Header/Icon";
import CloseButton from "../styles/Header/CloseButton";

const Header = ({ setSidebarOpen }) => (
    <MainContainer>
        <FlexContainer>
            <AvatarFlex>
                <AvatarContainer>
                    <Avatar />
                </AvatarContainer>
            </AvatarFlex>
            <NameContainer>
                <Name>Maciej Pajkowski</Name>
                <Span>Software developer</Span>
            </NameContainer>
            <CloseButton onClick={() => setSidebarOpen(false)}>X</CloseButton>
        </FlexContainer>
        <InfoBar>
            <Icon href="https://github.com/maciejpajkowski" target="_blank" type="github">
                <FontAwesomeIcon icon={faGithub} />
            </Icon>
            <Icon href="https://www.linkedin.com/in/maciej-pajkowski/" target="_blank" type="linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
            </Icon>
            <Icon href="mailto:maciej.pajkowski@gmail.com" type="mail">
                <FontAwesomeIcon icon={faEnvelope} />
            </Icon>
        </InfoBar>
    </MainContainer>
);

export default Header;
