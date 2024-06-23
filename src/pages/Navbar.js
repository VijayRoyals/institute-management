import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Admin Dashboard</Link></li>
        <li><Link to="/student">Student Dashboard</Link></li>
        <li><Link to="/trainer">Trainer Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
