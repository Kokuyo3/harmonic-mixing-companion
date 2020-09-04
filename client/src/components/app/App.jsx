import React from 'react';
import Header from './header/Header';
import AppMain from './app-main/AppMain';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Header />
        <AppMain />
      </div>
    </React.StrictMode>
  );
}

export default App;
