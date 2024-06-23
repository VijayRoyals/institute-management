import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Button component={Link} to="/">Home</Button>
        <Button component={Link} to="/about">About</Button>
        <Button component={Link} to="/contact">Contact</Button>
        <Button component={Link} to="/department">Department</Button>
      </Toolbar>
    </AppBar>

    
  );
};




const Navbar = () => {
  return (
      <div className="navbar">
          <input type="text" placeholder="Search..." />
          <button>Logout</button>
      </div>
  );
}


export default NavBar;

