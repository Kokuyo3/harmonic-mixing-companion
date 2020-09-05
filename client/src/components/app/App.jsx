import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <Header />
      <div className="app-body">
        <Sidebar />
        <Main />
      </div>
    </React.StrictMode>
  );
}

export default App;
