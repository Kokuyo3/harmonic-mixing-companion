import React from 'react';

import logo from '../../images/spotify_logo.svg';
import './UnauthorizedApp.css';

function UnauthorizedApp() {
  return (
    <div className="app--unauthorized">
      <header>
        <img src={logo} className="app-logo--unauthorized" alt="logo" />
        <p>
          Login with your Spotify account to begin.
        </p>
        <a
          href="PLACEHOLDER LINK"
          target="_self"
          rel="external noopener noreferrer"
        >
          <button type="button">Login with Spotify</button>
        </a>
      </header>
    </div>
  );
}

export default UnauthorizedApp;
