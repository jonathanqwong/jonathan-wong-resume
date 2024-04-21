import React from 'react';
import {Container} from "@mui/material";

const Header = ({ name, title }) => {
    return (
        <Container maxWidth="sm">
            <header>
                <h1>{name}</h1>
                <p>{title}</p>
            </header>
        </Container>

    );
};

export default Header;
