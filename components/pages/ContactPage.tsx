import React from "react";
import Container from "../../styles/pages/ContactPage/Container";
import ContactForm from "../ContactForm";

const ContactPage = () => {
    return (
        <Container>
            <p>
                Below is a contact form, through which you can send me a message.
                <br />
                Have a job for me? Want to cooperate on something? Your toaster broke and need help? Let me know.
            </p>
            <ContactForm />
        </Container>
    );
};

export default ContactPage;
