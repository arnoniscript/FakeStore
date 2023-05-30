import "./styles.css";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Bestselling = () => {
  return (
    <div className="Bestselling">
      {" "}
      <p>Best Selling Plants</p>
      <div className="description">
        {" "}
        <p>Easiest way to healthy life by buying your favorite plants </p>
      </div>
      <a href="/products">
        <button id="mainbutton">
          See more <BsArrowRight />
        </button>
      </a>
    </div>
  );
};

export default Bestselling;
