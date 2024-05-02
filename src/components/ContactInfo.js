import React, { useState, useEffect } from 'react';
import contactInfoData from '../mock/contact.json';
import Title from './Title';
import { Box, Container } from "@mui/material";

const ContactInfo = () => {
    const [contactInfo, setContactInfo] = useState(null);
    const email = contactInfo?.email;
    const phone = contactInfo?.phone;
    const linkedin = contactInfo?.linkedin;
    const github = contactInfo?.github;

    useEffect(() => {
        setContactInfo(contactInfoData?.contactInfo);
    }, []);

    if (!contactInfo) {
        return <div>Loading...</div>;
    }

    console.log("contact info", contactInfo);

    return (
        <React.Fragment>
            <Container className="contact-info" maxWidth="xl">
            <Title>Contact Information</Title>
                <Box
                    height={200}
                    width={200}
                    my={4}
                    display="inline-block"                        
                    alignItems="center"                       
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid grey' }}
                >
                    {contactInfo.email}
                </Box>
                <Box
                    height={200}
                    width={200}
                    my={4}
                    display="inline-block"                 
                    alignItems="center"                        
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid grey' }}
                >
                    {contactInfo.phone}
                </Box>
                <Box
                    height={200}
                    width={200}
                    my={4}
                    display="inline-block"           
                    alignItems="center"                        
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid grey' }}
                >
                    {contactInfo.linkedin}
                </Box>
                <Box
                    height={200}
                    width={200}
                    my={4}
                    display="inline-block"                       
                    alignItems="center"                        
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid grey' }}
                >
                    {contactInfo.github}
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default ContactInfo;


