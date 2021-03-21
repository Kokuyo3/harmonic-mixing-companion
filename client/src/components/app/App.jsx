import React from 'react';
import { useSelector } from 'react-redux';

import Header from './header/Header';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import UnauthorizedApp from './UnauthorizedApp';

import './App.css';

function App() {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  if (isAuthorized) {
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

  return (
    <React.StrictMode>
      <UnauthorizedApp />
    </React.StrictMode>
  );
}

export default App;
