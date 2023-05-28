import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (val) => {
    fetch(`http://localhost:4040/products`)
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
        placeholder="Procurando por algum produto?"
        type="text"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div id="icondiv">
        {" "}
        <BsSearch id="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
