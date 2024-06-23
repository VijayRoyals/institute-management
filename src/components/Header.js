import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* Add institute logo */}
          {/* <MenuIcon /> */}
          <img src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png" alt="logo" style={{ width: '100px', height: '100px' }} />
        </IconButton>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} >
          INSTITUTE MANAGEMENT OF BERL
        </Typography>
        <Button component={Link} to="/login" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
