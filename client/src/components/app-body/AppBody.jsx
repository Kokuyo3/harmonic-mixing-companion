import React from 'react';
import Search from '../search/Search';
import logo from '../../images/spotify_logo.svg';
import './AppBody.css';

function AppBody() {
  return (
    <div className="App-body">
      <img src={logo} className="App-logo" alt="logo" />
      <Search />
    </div>
  );
}

export default AppBody;
