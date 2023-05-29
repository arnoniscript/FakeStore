import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import "./CategoriesBar.css";

export const SearchCategoriesBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (val) => {
    fetch(`http://localhost:4040/categories`)
      .then((res) => res.json())
      .then((out) => {
        const results = out.filter((ele) => {
          return (
            val &&
            ele &&
            ele.title &&
            ele.title.toLowerCase().includes(val.toLowerCase())
          );
        });
        setResults(results);
      });
  };

  const handleChange = (val) => {
    setInput(val);
    fetchData(val);
  };
  return (
    <div className="input-wrapper">
      <input
        placeholder="Selecione a Categoria"
        type="text"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div id="icondiv">
        {" "}
        <AiFillCaretDown id="search-icon" />
      </div>
    </div>
  );
};

export default SearchCategoriesBar;
