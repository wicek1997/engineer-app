import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => (
    <div>
      <nav>
          <ul className = "nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/SignIn">Sign In</Link></li>
          </ul>
        </nav>
    </div>

)