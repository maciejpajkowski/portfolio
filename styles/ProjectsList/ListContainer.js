import styled from "styled-components";

const ListContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3, 250px);
    grid-gap: 1rem 1rem;
    height: 85vh;
    max-height: 100%;
    overflow: auto;
    padding: 1rem 1rem 0 1rem;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        background-color: transparent;
        border-radius: 5px;
    }

    &::-webkit-scrollbar {
        width: 5px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #fff;
        background-image: -webkit-gradient(
            linear,
            40% 0%,
            75% 84%,
            from(#4d9c41),
            to(#19911d),
            color-stop(0.6, #1ac966)
        );
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        height: 100vh;
        margin-top: 2em;
    }

    @media (max-width: 768px) and (min-height: 1024px) {
        height: 85vh;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export default ListContainer;
