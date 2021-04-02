import React from 'react';
import './Header.scss';
import Navbar from './Navbar/Navbar';
import SearchBox from "./SearchBox/SearchBox";

const Header = ({search, setSearch}) => {

  return (
    <header>
      <div className="container">
        <Navbar />
        <SearchBox search={search} setSearch={setSearch} />
      </div>
    </header>
  )
}

export default Header
