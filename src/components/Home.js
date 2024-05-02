import React from 'react';
import {Container, Avatar, Stack} from "@mui/material";
import Title from './Title';
import Selfie from '../images/selfie.jpeg';

const Home = ({ name, title }) => {
    return (
        <Container maxWidth="xl">
            <header>
                <Title>About Me</Title>
                <p>{title}</p>
            </header>
            <Stack direction="row" spacing={2}>
                <Avatar alt="Jonathan Wong" src={Selfie} />
            </Stack>
        </Container>

    );
};

export default Home;
