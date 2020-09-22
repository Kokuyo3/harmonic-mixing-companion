import React from 'react';

import logo from '../../../images/spotify_logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <a className="nav-link" href="/">Home</a>
        <a className="nav-link" href="/faq">FAQ</a>
        <a className="nav-link" href="/about">About</a>
      </nav>
    </header>
  );
}

export default Header;
