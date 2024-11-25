import React, { useState } from "react";
import FormContainer from "../styles/ContactForm/FormContainer";

const ContactForm = () => {
    const [status, setStatus] = useState("");

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
    };

    return (
        <FormContainer onSubmit={submitForm} action="https://formspree.io/xgenzbob" method="POST">
            <label>Your email address:</label>
            <input type="email" name="email" required />
            <label>Message:</label>
            <textarea name="message" rows={8} required />
            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit!</button>}
            {status === "ERROR" && <p>There was an error :/</p>}
        </FormContainer>
    );
};

export default ContactForm;
