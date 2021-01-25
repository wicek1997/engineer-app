import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss';

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
  {
    "title": "Logout",
    "url": "/logout",
  },
];

const renderNav = () => {
  return(
    <nav>
      <ul className="nav-links">
        { navbar.map((item, index) => <li key={index}><Link to={item.url}>{item.title}</Link></li>) }
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
