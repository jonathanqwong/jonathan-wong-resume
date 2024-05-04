import React from 'react';
import { Container, Typography, Box } from "@mui/material";
import Title from './Title';
import Selfie from '../images/selfie.jpeg';
import Background from '../images/cool-background.png';
import ContactInfo from './ContactInfo';
import SkillsInfo from './Skills';
import './styles.scss';

const Home = ({ name, title, skills }) => {
    return (
        <React.Fragment>
            <Container maxWidth="xl" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: 'max-height' }}>        
                <div className="home-page-top">
                    <Title>About Me</Title>
                    <Typography component="h2" variant="h5" color="grey" lineHeight="4rem" gutterBottom>{title}</Typography>
                    <Box
                        height="15rem"
                        width="20rem"
                        display="inline-block"
                        alignItems="center"
                    >
                        <img src={Selfie} alt="Selfie" style={{ width: 'max-width', height: '90%', objectFit: 'cover' }} />
                    </Box>
                </div>
            </Container>
            <Container>
                <SkillsInfo skills={skills}></SkillsInfo>
            </Container>
            <Container>
                <ContactInfo></ContactInfo>
            </Container>
        </React.Fragment>
    );
};

export default Home;
