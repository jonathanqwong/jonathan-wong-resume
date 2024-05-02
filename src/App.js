import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AcUnit from '@mui/icons-material/AcUnit';

import { SUPABASE_URL, SUPABASE_KEY, FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID } from './configuration/config';
import Home from './components/Home';
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Selfie from '../src/images/selfie.jpeg'

// Import the functions you need from the SDKs you need
import { createClient } from "@supabase/supabase-js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const pages = ['About', 'Contact', 'Education', 'Experiences', 'Skills'];

// Import Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
    const name = "Jonathan Wong";
    const title = "Seasoned Software Developer Engineer in Test. Tech Lover. Lifelong Student.";

    const [skills, setSkills] = useState([]);
    const [education, setEducation] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        getSkills();
        getEducation();
        getExperiences();
        getCertifications();
    }, []);
      
    async function getSkills() {
        const { data } = await supabase.from("skills").select();
        setSkills(data);
    }

    async function getEducation() {
        const { data } = await supabase.from("education").select();
        setEducation(data);
    }

    async function getExperiences() {
        const { data } = await supabase.from("experiences").select();
        setExperiences(data);
    }

    async function getCertifications() {
        const { data } = await supabase.from("certifications").select();
        setCertifications(data);
    }

    // Define components in an object
    const components = {
        About: () => <Home name={name} title={title}/>,
        Contact: () => <ContactInfo/>,
        Education: () => <Education education={education} certifications={certifications}/>,
        Experiences: () => <Experiences experiences={experiences}/>,
        Skills: () => <Skills skills={skills}/>,
    };

    // Responsive Navbar https://mui.com/material-ui/react-app-bar/
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };  

    return (
        <Router>
            <AppBar position="static">
                <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* Access menu from large screens */}
                    <AcUnit sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        >
                        {name}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                        display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                             <MenuItem 
                                key={page} 
                                component={Link} 
                                to={`/${page.toLowerCase()}`} 
                                onClick={handleCloseUserMenu}
                            >                               
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                    </Box>

                    
                    <AcUnit sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        >
                        {name}
                    </Typography>

                    {/* Access menu from large screens */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                component={Link} to={page.toLowerCase()} 
                                color="inherit"
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                {page}
                            </Button>
                        ))}
                    </Box>
        
                    {/* Avatar in AppBar */}
                    <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Hi, nice to meet you!">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt={name} src={Selfie} />
                        </IconButton>
                    </Tooltip>
                    </Box>
                </Toolbar>
                </Container>
            </AppBar>

            {/* Routes for paths */}
            <Routes>
                <Route path="/" element={<Home name={name} title={title} />} />
                {Object.entries(components).map(([path, Component]) => (
                    <Route key={path} path={`/${path.toLowerCase()}`} element={<Component />} />
                ))}
            </Routes>
      </Router>
    );
}

export default App;
