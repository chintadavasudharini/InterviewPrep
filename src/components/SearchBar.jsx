import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="input-group search-container bg-white rounded-pill px-3 py-1 shadow-sm border" style={{ maxWidth: '400px' }}>
      <span className="input-group-text bg-transparent border-0 pe-0">
        <BsSearch className="text-muted" />
      </span>
      <input 
        type="text" 
        className="form-control bg-transparent border-0 shadow-none ps-2" 
        placeholder="Search concepts..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
