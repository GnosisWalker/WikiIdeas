import React from 'react';
import logo from '../../assets/logo_dark.svg';

import './Nav.css';
import {Link} from "react-router-dom";

const Nav: React.FC<any> = () => {

  return (
    <nav>
      <img
        alt="logo"
        src={logo}
        className="logo"
      />

      <div className="routes">
        <Link to='/'>Home</Link>
        <Link to='articles'>Articles</Link>

      </div>
    </nav>
  );
};

export default Nav;