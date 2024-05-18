import React, { useState, useEffect } from 'react';
import { Box, Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Title from './Title';
import contactInfoData from '../mock/contact.json';
import './styles.scss';

const ContactInfo = () => {
    const [contactInfo, setContactInfo] = useState(null);
    const email = contactInfo?.email;
    const emailLink = `mailto:${email}`;
    const linkedin = contactInfo?.linkedin;
    const github = contactInfo?.github;

    useEffect(() => {
        setContactInfo(contactInfoData?.contactInfo);
    }, []);

    if (!contactInfo) return <div>Loading...</div>

    return (
        <>
            <Title>Contact Information</Title>
            <Box className="contact-container">
                <Button href={emailLink} className="contact-button">
                    <EmailIcon className="contact-button-icon" />
                </Button>
                <Button href={linkedin} className="contact-button">
                    <LinkedInIcon className="contact-button-icon" />
                </Button>
                <Button href={github} className="contact-button">
                    <GitHubIcon className="contact-button-icon" />
                </Button>
            </Box>
        </>
    );
};

export default ContactInfo;
