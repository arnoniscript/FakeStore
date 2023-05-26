import "./styles.css";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import TopSelling from "../showTopSellingItems";

const Bestselling = () => {
  return (
    <body className="containerbody">
      {" "}
      <div className="Bestselling">
        {" "}
        <p>Best Selling Plants</p>
        <div className="description">
          {" "}
          <p>Easiest way to healthy life by buying your favorite plants </p>
        </div>
        <button id="mainbutton">
          See more <BsArrowRight />
        </button>
      </div>
      <TopSelling />
    </body>
  );
};

export default Bestselling;
