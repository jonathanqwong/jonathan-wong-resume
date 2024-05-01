import React from 'react';
import {Container} from "@mui/material";
import Title from './Title';

const Header = ({ name, title }) => {
    return (
        <Container maxWidth="sm">
            <header>
                <Title>{name}</Title>
                <p>{title}</p>
            </header>
        </Container>

    );
};

export default Header;
