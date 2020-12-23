import React from 'react';
import styled from 'styled-components';
import ContactForm from '../ContactForm';

const StyledContactPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;

    @media (max-width: 768px) {
        margin-top: 2em;
    }
`;

const ContactPage = () => {

    return (
        <StyledContactPageContainer>
            <p>Below is a contact form, through which you can send me a message. 
            <br />Have a job for me? Want to cooperate on something? Your toaster broke and need help? Let me know.</p>
            <ContactForm />
        </StyledContactPageContainer>
    )
}

export default ContactPage;