import styled from "styled-components";

const SidebarContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 3fr;
    transition: all 0.6s;
    background: #292929;

    @media (max-width: 768px) {
        position: absolute;
        left: 0;
        height: 100%;
        width: 50%;
        transform: ${(props) => (props.isOpen ? "translate(0%)" : "translate(-120%)")};
        opacity: ${(props) => (props.isOpen ? "1" : "0")};
        z-index: 2;
        box-shadow: 0 0 10px 3px #111;
    }

    @media (max-width: 480px) {
        width: 100%;
    }

    @media (min-height: 1024px) {
        height: 92%;
    }
`;

export default SidebarContainer;
