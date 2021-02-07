import styled from "styled-components";

const MainContainer = styled.div`
    border-bottom: 3px solid #1ac966;
    cursor: pointer;
    transition: all 0.3s;
    height: 240px;

    &:hover {
        box-shadow: 0 2px 2px 1px #222;
        transform: translateY(-3px);
        border-bottom: 3px solid
            ${(props) => {
                switch (props.type) {
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
    }
`;

export default MainContainer;
