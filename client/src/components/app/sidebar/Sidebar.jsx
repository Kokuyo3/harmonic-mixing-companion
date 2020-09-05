import React from 'react';
import Search from './search/Search';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <Search />
    </aside>
  );
}

export default Sidebar;
