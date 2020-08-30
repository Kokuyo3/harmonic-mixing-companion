import React from 'react';
import logo from '../images/spotify_logo.svg';
import './App.css';

function App() {
  function handleSpotifyAuth() {
    // api.get('/login').then(res => console.log(res));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Login with your Spotify account to begin.
        </p>
        <a
          // onClick={handleSpotifyAuth}
          className="App-link"
          href="http://localhost:3000/login"
          target="_self"
          rel="external noopener noreferrer"
        >
          <button type="button">Login with Spotify</button>
        </a>
      </header>
    </div>
  );
}

export default App;
