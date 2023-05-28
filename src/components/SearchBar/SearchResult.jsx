import React from "react";
import "./SearchResultList.css";

export const SearchResult = ({ ele }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You clicked on ${ele.title}`)}
    >
      {ele.title}
    </div>
  );
};

export default SearchResult;
