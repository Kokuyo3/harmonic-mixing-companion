import React from 'react';
import Header from '../header/Header';
import AppBody from '../app-body/AppBody';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Header />
        <AppBody />
      </div>
    </React.StrictMode>
  );
}

export default App;
