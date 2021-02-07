import styled from "styled-components";

const Icon = styled.div`
    display: flex;
    font-size: 2rem;
    margin: 0 0.6rem;
    color: ${(props) => {
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
    justify-content: center;
    align-items: center;
`;

export default Icon;
