// Core
import React from 'react';

// Other
import './searchInput.styles.css';

export const SearchInput = ({ onChangeHandler, placeholder }) => (
  <div className='searchInput'>
    <input
      type='search'
      placeholder={placeholder}
      className='searchInputField'
      onChange={e => onChangeHandler(e)}
    />
    <div className='searchInputDivider' />
  </div>
);
