import styled from "styled-components";

const FormContainer = styled.form`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 1rem;
    }

    input,
    textarea {
        font-family: inherit;
        background: #333;
        width: 50%;
        font-size: 1.6rem;
        border: none;
        outline: none;
        border-bottom: 3px solid #1ac966;
        margin-bottom: 1rem;
        color: #eee;
    }

    button {
        color: #eee;
        width: 20%;
        height: 3rem;
        font-weight: 600;
        font-size: 18px;
        cursor: pointer;
        background: #333;
        outline: none;
        border: none;
        /* box-shadow: 0px 1px 3px 1px #333; */
        border-bottom: 3px solid #1ac966;
        transition: all 0.3s;
        margin-top: 0.6rem;

        &:hover {
            background: #1ac966;
            border-bottom: 3px solid #288550;
            transform: translateY(-3px);
        }

        &:active {
            background: #eee;
            border-color: #666;
            color: #333;
        }
    }

    @media (max-width: 600px) {
        align-items: center;

        input,
        textarea {
            width: 100%;
        }

        button {
            width: 40%;
        }
    }
`;

export default FormContainer;
