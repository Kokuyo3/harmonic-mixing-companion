import React from 'react';

import './Sidebar.css';

import Search from './search/Search';
import SearchResults from './search-results/SearchResults';

function Sidebar() {
  return (
    <aside className="sidebar">
      <Search />
      <SearchResults />
    </aside>
  );
}

export default Sidebar;
