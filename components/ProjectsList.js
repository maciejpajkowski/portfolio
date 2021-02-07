import React, { useState } from "react";
import ProjectsListItem from "./ProjectsListItem";
import DisplayCase from "./DisplayCase";
import Modal from "react-modal";
import modalCustomStyles from "../styles/ProjectsList/modalCustomStyles";
import Padding from "../styles/ProjectsList/Padding";
import ListContainer from "../styles/ProjectsList/ListContainer";

Modal.setAppElement("#__next");

const ProjectsList = ({ data }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContents, setModalContents] = useState({
        title: "",
        description: "",
        type: "",
        repoLink: "",
        liveLink: "",
        image: "",
    });

    const openModal = (item) => {
        setModalContents({
            title: item.name,
            description: item.description,
            type: item.repositoryTopics.edges[0].node.topic.name,
            repoLink: item.url,
            liveLink: item.homepageUrl,
            image: item.openGraphImageUrl,
        });
        setModalIsOpen(true);
    };

    const closeModal = () => setModalIsOpen(false);

    return (
        <>
            <ListContainer>
                {data.map((project) => {
                    return (
                        <ProjectsListItem
                            image={project.node.openGraphImageUrl}
                            title={project.node.name}
                            description={project.node.description}
                            type={project.node.repositoryTopics.edges[0].node.topic.name}
                            key={project.node.id}
                            onClick={() => openModal(project.node)}
                        />
                    );
                })}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    key={modalContents.name}
                    style={modalCustomStyles}
                    closeTimeoutMS={300}
                >
                    <DisplayCase
                        title={modalContents.title}
                        description={modalContents.description}
                        type={modalContents.type}
                        repoLink={modalContents.repoLink}
                        liveLink={modalContents.liveLink}
                        image={modalContents.image}
                        onClick={closeModal}
                        isModal
                    />
                </Modal>
                {/* <Padding /> */}
                {/* <Padding /> */}
                <Padding />
            </ListContainer>
        </>
    );
};

export default ProjectsList;
