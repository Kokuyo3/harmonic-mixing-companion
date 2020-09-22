import React from 'react';

import './App.css';

import Header from './header/Header';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';

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
