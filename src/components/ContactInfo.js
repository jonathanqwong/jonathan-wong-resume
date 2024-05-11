import React, { useState, useEffect } from 'react';
import { Container, Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Title from './Title';
import contactInfoData from '../mock/contact.json';

const ContactInfo = () => {
    const [contactInfo, setContactInfo] = useState(null);
    const email = contactInfo?.email;
    const emailLink = `mailto:${email}`;
    const linkedin = contactInfo?.linkedin;
    const github = contactInfo?.github;

    useEffect(() => {
        setContactInfo(contactInfoData?.contactInfo);
    }, []);

    if (!contactInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Container className="contact-info" maxWidth="xl">
            <Title>Contact Information</Title>
                <Button href={emailLink}>
                    <EmailIcon></EmailIcon>
                </Button>
                <Button href={linkedin}>
                    <LinkedInIcon></LinkedInIcon>
                </Button>
                <Button href={github}>
                    <GitHubIcon></GitHubIcon>
                </Button>
            </Container>
        </div>
    );
};

export default ContactInfo;