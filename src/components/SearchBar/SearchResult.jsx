import React from "react";
import "./SearchResultList.css";

export const SearchResult = ({ ele }) => {
  return (
    <div className="search-result">
      <a href={`/products/${ele.id}`}>{ele.title}</a>
    </div>
  );
};

export default SearchResult;
