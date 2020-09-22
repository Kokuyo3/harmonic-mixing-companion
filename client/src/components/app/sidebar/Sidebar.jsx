import React from 'react';

import './Sidebar.css';

import Search from './search/Search';
import SongsTable from './songs-table/SongsTable';

function Sidebar() {
  return (
    <aside className="sidebar">
      <Search />
      <SongsTable />
    </aside>
  );
}

export default Sidebar;
