import styled from "styled-components";

const Header = styled.header`
    background: #292929;
    text-align: center;
    line-height: 2em;
    font-size: 26px;

    @media (max-width: 768px) {
        position: fixed;
        width: 94%;
        font-size: 20px;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export default Header;
