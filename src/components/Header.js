import React from 'react';
import {Container, Avatar, Stack} from "@mui/material";
import Title from './Title';

const Header = ({ name, title }) => {
    return (
        <Container maxWidth="sm">
            <header>
                <Title>{name}</Title>
                <p>{title}</p>
            </header>
            <Stack direction="row" spacing={2}>
                <Avatar alt="Jonathan Wong" src="../static/images/selfie.jpeg" />
            </Stack>
        </Container>

    );
};

export default Header;
