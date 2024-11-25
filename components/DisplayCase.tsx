import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import getAdequateIcon from "../utils/getAdequateIcon";
import getAdequateText from "../utils/getAdequateText";
import MainContainer from "../styles/DisplayCase/MainContainer";
import HalfContainer from "../styles/DisplayCase/HalfContainer";
import Title from "../styles/DisplayCase/Title";
import Project from "../styles/DisplayCase/Project";
import ProjectLogo from "../styles/DisplayCase/ProjectLogo";
import Description from "../styles/DisplayCase/Description";
import ButtonContainer from "../styles/DisplayCase/ButtonContainer";
import Link from "../styles/DisplayCase/Link";
import Button from "../styles/DisplayCase/Button";
import ImageContainer from "../styles/DisplayCase/ImageContainer";
import Image from "../styles/DisplayCase/Image";
import CloseButton from "../styles/DisplayCase/CloseButton";

const DisplayCase = ({ title, description, type, repoLink, liveLink, image, isModal, onClick }) => {
    return (
        <MainContainer>
            <HalfContainer>
                <Title>
                    {title}
                    <Project>
                        <ProjectLogo $type={type}>
                            <FontAwesomeIcon icon={getAdequateIcon(type)} />
                        </ProjectLogo>
                        {getAdequateText(type)}
                    </Project>
                </Title>
                <Description>{description}</Description>
                <ButtonContainer>
                    <Link href={repoLink + "/blob/master/README.md"} target="_blank">
                        <Button>
                            <FontAwesomeIcon icon={faFileAlt} />
                            <span>Read more</span>
                        </Button>
                    </Link>
                    <Link href={repoLink} target="_blank">
                        <Button $repoLink={repoLink}>
                            <FontAwesomeIcon icon={faGithub} />
                            <span>Repo</span>
                        </Button>
                    </Link>
                    <Link href={liveLink} target="_blank">
                        <Button $liveLink={liveLink}>
                            <FontAwesomeIcon icon={faGlobeEurope} />
                            <span>Live</span>
                        </Button>
                    </Link>
                    <Link onClick={onClick}>
                        <CloseButton $isModal={isModal}>
                            <span>X</span>
                        </CloseButton>
                    </Link>
                </ButtonContainer>
            </HalfContainer>
            <HalfContainer>
                <ImageContainer>
                    <Image $image={image} />
                </ImageContainer>
            </HalfContainer>
        </MainContainer>
    );
};

export default DisplayCase;
