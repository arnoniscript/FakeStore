import "./styles.css";
import React from "react";

const CardBestSelling = ({ imageURL, title, price }) => {
  return (
    <body id="topselling">
      <div className="Showitem">
        <img src={imageURL} alt={title}></img>
      </div>
      <div className="itemname">
        <p>{title}</p>{" "}
      </div>
      <div className="itemprice">
        <p>R$: {price}</p>
      </div>
    </body>
  );
};

export default CardBestSelling;
