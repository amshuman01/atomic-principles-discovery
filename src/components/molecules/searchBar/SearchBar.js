import React from "react";
import TextInput from "../../atoms/inputs/TextInput";
import SearchIcon from "../../../images/search-icon.png";
import Class from "./Searchbar.module.css";

const SearchBar = (props) => {
  const focusSearch = () => {};
  return (
    <div className={(Class.searchBar, props.className)}>
      <TextInput
        name="Movie-search"
        placeholder="Search for a show, episode, shorts etc."
        type="text"
        className={Class.search}
      />
      <img
        src={SearchIcon}
        alt="searchIcon"
        onClick={focusSearch}
        className={Class.img}
      ></img>
    </div>
  );
};

export default SearchBar;
