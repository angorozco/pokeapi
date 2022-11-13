import React from 'react';
import './searchbar.css';

const SearchBar = ({search}) => {
  return (
    <form action="" onSubmit={search}>
      <input type="text" name="search" className='search-bar' placeholder='SEARCH'/>
      <button className='btn'>SEARCH</button>
    </form>
  )
}

export default SearchBar