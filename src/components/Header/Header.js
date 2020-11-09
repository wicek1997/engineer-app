import React from 'react';
import {Link} from "react-router-dom";
import './Nav.scss';

const navbar = [
  {
    "title": "Home",
    "url": "/",
  },
  {
    "title": "Register",
    "url": "/register",
  },
  {
    "title": "Login",
    "url": "/login",
  },
];

const renderNav = () => {
  const navStyle = {
    color: 'white'
  }

  return(
    <nav>
      <ul className="nav-links">
        { navbar.map((item, index) => <li key={index}><Link style={navStyle} to={item.url}>{item.title}</Link></li>) }
      </ul>
    </nav>
  )
}

export const Header = () => {
  return(
    <header>      
      { renderNav() }
    </header>
  )
}
