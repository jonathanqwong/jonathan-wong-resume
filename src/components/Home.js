import React from 'react';
import { Container, Typography, Box } from "@mui/material";
import Title from './Title';
import Selfie from '../images/selfie.jpeg';
import Background from '../images/cool-background.png';
import ContactInfo from './ContactInfo';
import SkillsInfo from './Skills';
import './styles.scss';

const Home = ({ title, skills }) => {
    return (
        <>
            <Container className="home-container" maxWidth="xl" style={{ backgroundImage: `url(${Background})`}}>        
                <Title className="home-title">About Me</Title>
                <Typography className="home-description" component="h2" variant="h5" gutterBottom>{title}</Typography>
                <div className="home-image-container">
                    <img src={Selfie} alt="Selfie" />
                </div>
            </Container>
            <SkillsInfo skills={skills}></SkillsInfo>
            <ContactInfo></ContactInfo>
        </>
    );
};

export default Home;
