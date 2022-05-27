import React from "react";
import searchIcon from "../../../assets/images/search-icon.png";

const Search = (props) => {
  return (
    <div className="search-wrapper">
      <img src={searchIcon} alt="search icon" className="search-icon" />
      <input
        type="text"
        placeholder="Search City"
        value={props.search}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Search;
