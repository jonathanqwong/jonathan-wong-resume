import React from 'react';
import { Container, Typography } from "@mui/material";
import Title from './Title';
import ContactInfo from './ContactInfo';
import SkillsInfo from './Skills';
import Selfie from '../images/selfie.jpeg';
import Background from '../images/cool-background.png';
import './styles.scss';

const Home = ({ title }) => {
    return (
        <>
            <Container className="home-container" maxWidth="xl" style={{ backgroundImage: `url(${Background})`}}>
                <Title className="home-title">About Me</Title>
                <Typography className="home-description" component="h2" variant="h5" gutterBottom>{title}</Typography>
                <div className="home-image-container">
                    <img src={Selfie} alt="Selfie" />
                </div>
            </Container>
            <SkillsInfo/>
            <ContactInfo/>
        </>
    );
};

export default Home;
