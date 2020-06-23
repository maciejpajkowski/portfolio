import React, { useState } from "react";
import styled from 'styled-components';

const StyledContactForm = styled.form`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 1rem;
    }

    input, textarea {
        font-family: inherit;
        background: #333;
        width: 50%;
        font-size: 1.6rem;
        border: none;
        outline: none;
        border-bottom: 2px solid #1ac966;
        margin-bottom: 1rem;
        color: #eee;
    }

    button {
        color: #eee;
        width: 20%;
        height: 3rem;
        font-weight: 600;
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
`;

const ContactForm = () => {
    const [ status, setStatus] = useState("");

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    }

    return (
      <StyledContactForm
        onSubmit={submitForm}
        action="https://formspree.io/xgenzbob"
        method="POST"
      >
        <label>Your email address:</label>
        <input type="email" name="email" required/>
        <label>Message:</label>
        <textarea type="text" name="message" rows="8" required />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit!</button>}
        {status === "ERROR" && <p>There was an error :/</p>}
      </StyledContactForm>
    ); 
}

export default ContactForm;