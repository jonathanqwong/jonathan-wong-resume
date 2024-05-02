import React from 'react';
import { Container, Avatar, Stack, Typography } from "@mui/material";
import Title from './Title';
import Selfie from '../images/selfie.jpeg';

const Home = ({ name, title }) => {
    return (
        <React.Fragment>
            <Container maxWidth="xl">
                <header>
                    <Title>About Me</Title>
                    <Typography component="h2" variant="h5" color="grey" lineHeight="4rem" gutterBottom>{title}</Typography>
                </header>
                <Stack direction="row" spacing={2}>
                    <Avatar alt="Jonathan Wong" src={Selfie} />
                </Stack>
            </Container>
        </React.Fragment>
    );
};

export default Home;
