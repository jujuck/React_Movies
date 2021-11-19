import React from 'react';
import { Link } from 'react-router-dom';
/** Import de CSS */
import './Menu.css';

/** IMport des images */
import Logo from '../assets/icones/logo.jpeg';

const Menu = () => {
  return (
    <div className="menu">
      <img src={Logo} alt="Logo de l'application Movies APP" />
      <nav>
        <Link exact to="/">
          Home
        </Link>
        <Link exact to="/AddMovie">
          Add a movie
        </Link>
        <Link to="/single/1">single 1</Link>
      </nav>
    </div>
  );
};

export default Menu;
