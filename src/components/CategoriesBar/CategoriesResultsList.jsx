import React from "react";
import "./CategoriesResults";
import { CategoriesResults } from "./CategoriesResults";

export const CategoriesResultsList = ({ results2 }) => {
  return (
    <div className="results-list">
      {results2?.map((ele, index) => {
        return <CategoriesResults key={index} ele={ele} />;
      })}
    </div>
  );
};

export default CategoriesResultsList;
