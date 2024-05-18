import React from 'react';
import { Button } from "@mui/material";
import './styles.scss';

const ContactInfo = () => {

    return (
        <>
            <Title>Contact Information</Title>
            <div className="contact-container">
                <Button href={emailLink} className="contact-button">
                    <EmailIcon className="contact-button-icon" />
                </Button>
                <Button href={linkedin} className="contact-button">
                    <LinkedInIcon className="contact-button-icon" />
                </Button>
                <Button href={github} className="contact-button">
                    <GitHubIcon className="contact-button-icon" />
                </Button>
            </div>
            
        </>
    );
};

export default ContactInfo;