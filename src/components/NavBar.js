import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AcUnit from '@mui/icons-material/AcUnit';
import Selfie from '../images/selfie.jpeg';

const NavBar = (props) => {
    let name = props.name;
    const pages = ['About', 'Education', 'Experiences', 'Skills', 'Contact'];

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
        <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar disableGutters>

            {/* Access menu from small screens */}
            <AcUnit sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                // href="/"
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
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } } } className="navbar-small">
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
                            key={page.toLowerCase()} 
                            component={Link} 
                            to={page.toLowerCase()} 
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
                // href="/"
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
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="navbar-xl">
                {pages.map((page) => (
                    <Button 
                        component={Link} to={page.toLowerCase()} 
                        color="inherit"
                        key={page.toLowerCase()}
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
        <Outlet />
    </AppBar>
    );
}

export default NavBar;