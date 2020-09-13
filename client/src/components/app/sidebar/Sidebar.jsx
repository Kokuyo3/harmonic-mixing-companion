import React from 'react';
import Search from './search/Search';
import SongsTable from './songs-table/SongsTable';

import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <Search />
      <SongsTable />
    </aside>
  );
}

export default Sidebar;
