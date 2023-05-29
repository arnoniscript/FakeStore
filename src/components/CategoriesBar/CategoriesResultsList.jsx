import React from "react";
import "./CategoriesResults";
import { CategoriesResults } from "./CategoriesResults";
import { getProducts } from "../../services/products";

export const CategoriesResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results?.map((ele, index) => {
        return <CategoriesResults key={index} ele={ele} />;
      })}
    </div>
  );
};

export default CategoriesResultsList;
