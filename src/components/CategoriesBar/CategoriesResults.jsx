import React from "react";
import "./CategoriesResultsList";

export const CategoriesResults = ({ ele }) => {
  return (
    <div className="search-result">
      <a href={`/products/categories/${ele.index}`}>{ele.index}</a>
    </div>
  );
};

export default CategoriesResults;
