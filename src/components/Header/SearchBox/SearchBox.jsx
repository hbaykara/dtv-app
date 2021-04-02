import React from "react";
import "./SearchBox.scss";
import { FiSearch } from "react-icons/fi";

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="search-box">
      <form className="search-box__form">
        <input
          id="search-box"
          className="search-box__input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Arama"
          aria-label="Arama"
        />
        <label className="search-box__icon" htmlFor="search-box">
          <FiSearch />
        </label>
      </form>
    </div>
  );
};

export default SearchBox;
