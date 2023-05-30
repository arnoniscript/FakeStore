import React from "react";
import "./CategoriesResultsList";

export const CategoriesResults = ({ ele }) => {
  return (
    <div className="search-result">
      <a href={`/products/category/${ele.category}`}>{ele.category}</a>
    </div>
  );
};

export default CategoriesResults;
