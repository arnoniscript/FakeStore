import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import "./CategoriesBar.css";

export const SearchCategoriesBar = ({ setResults2 }) => {
  const [inputCategory, setInputCategory] = useState("");

  const fetchData = (val) => {
    fetch(`http://localhost:4040/products/categories`)
      .then((res) => res.json())
      .then((out) => {
        const categories = out.filter((ele) => {
          return (
            val &&
            ele &&
            ele.category &&
            ele.category.toLowerCase().includes(val.toLowerCase())
          );
        });

        setResults2(categories);
      });
  };

  const handleChange = (val) => {
    setInputCategory(val);
    fetchData(val);
  };
  return (
    <div className="input-wrapper">
      <input
        placeholder="Selecione a Categoria"
        type="text"
        value={inputCategory}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div id="icondiv">
        <AiFillCaretDown id="search-icon" />
      </div>
    </div>
  );
};

export default SearchCategoriesBar;
