import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export function Nav() {
    const navStyle = {
        color: 'white'
    }

  return (
    <nav>
        <ul className="nav-links">
            <Link style={navStyle}  to="/"><li>About</li></Link>
            <Link style={navStyle} to="/register"><li>Register</li></Link>
            <Link style={navStyle} to="/login"><li>Login</li></Link>      
        </ul>
    </nav>
  );
}
