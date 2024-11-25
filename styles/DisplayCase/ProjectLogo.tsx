import styled from "styled-components";

const ProjectLogo = styled.div<{ $type: string; }>`
    font-size: 22px;
    color: ${(props) => {
        switch (props.$type) {
            case "react":
                return "#30b7ff";
            case "angular":
                return "#dd1b16";
            case "javascript":
                return "#ffee03";
            case "html":
                return "#ff4900";
            case "dotnet":
                return "#476cff";
            case "other":
                return "#b247ff";
        }
    }};
    margin-right: 0.5rem;
`;

export default ProjectLogo;
