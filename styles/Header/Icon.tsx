import styled from "styled-components";

const Icon = styled.a`
    text-decoration-line: none;
    color: inherit;
    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        color: ${(props) => {
            switch (props.type) {
                case "github":
                    return "#662299";
                case "linkedin":
                    return "#1144ff";
                case "mail":
                    return "#22aa55";
            }
        }};
    }
`;

export default Icon;
