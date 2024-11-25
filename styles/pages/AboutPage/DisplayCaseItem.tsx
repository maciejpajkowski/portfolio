import styled from "styled-components";
import { faDatabase, faFileExcel, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
    faReact,
    faAngular,
    faJs,
    faHtml5,
    faCss3Alt,
    faMicrosoft,
    faPython,
    faGitSquare,
} from "@fortawesome/free-brands-svg-icons";

const DisplayCaseItem = styled.div<{ $icon?: IconDefinition }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    width: 10rem;
    text-align: center;

    svg {
        font-size: 4em;
        margin-bottom: 0.5rem;
        color: #1ac966;
        transition: all 0.3s;

        &:hover {
            color: ${(props) => {
                switch (props.$icon) {
                    case faHtml5:
                        return "#ff4900";
                    case faCss3Alt:
                        return "#038cfc";
                    case faJs:
                        return "#ffee03";
                    case faAngular:
                        return "#dd1b16";
                    case faReact:
                        return "#30b7ff";
                    case faMicrosoft:
                        return "#476cff";
                    case faDatabase:
                        return "#ccc";
                    case faFileExcel:
                        return "#2e8c38";
                    case faPython:
                        return "#ffe873";
                    case faGitSquare:
                        return "#f1502f";
                }
            }};
        }

        @media (max-width: 768px) {
            font-size: 3em;
        }
    }

    @media (max-width: 1366px) {
        width: 7em;
    }

    @media (max-width: 768px) {
        width: 8em;
        padding: 0.5em;
    }
`;

export default DisplayCaseItem;
