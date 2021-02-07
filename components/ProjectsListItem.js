import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fixDescriptionLength from "../utils/fixDescriptionLength";
import getAdequateIcon from "../utils/getAdequateIcon";
import MainContainer from "../styles/ProjectsListItem/MainContainer";
import Image from "../styles/ProjectsListItem/Image";
import Info from "../styles/ProjectsListItem/Info";
import Icon from "../styles/ProjectsListItem/Icon";
import TextContainer from "../styles/ProjectsListItem/TextContainer";
import Title from "../styles/ProjectsListItem/Title";
import Description from "../styles/ProjectsListItem/Description";

const ProjectsListItem = ({ title, description, image, type, onClick }) => {
    return (
        <MainContainer type={type} onClick={onClick}>
            <Image image={image} />
            <Info>
                <Icon type={type}>
                    <FontAwesomeIcon icon={getAdequateIcon(type)} />
                </Icon>
                <TextContainer>
                    <Title>{title}</Title>
                    <Description>{fixDescriptionLength(description)}</Description>
                </TextContainer>
            </Info>
        </MainContainer>
    );
};

export default ProjectsListItem;
