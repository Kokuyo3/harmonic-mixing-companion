import React from 'react';
import Search from './sidebar/search/Search';
import logo from '../../../images/spotify_logo.svg';
import './AppMain.css';

function AppMain() {
  return (
    <div className="App-body">
      <img src={logo} className="App-logo" alt="logo" />
      <Search />
    </div>
  );
}

export default AppMain;
