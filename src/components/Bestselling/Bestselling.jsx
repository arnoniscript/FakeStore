import "./styles.css";
import { BsArrowRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import { getTopSelling } from "../../services/products";
import { cardBestSelling } from "./cardBestSelling";
import { Loading } from "../LoadingCircle";
const Bestselling = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    getTopSelling()
      .then((response) => setProducts(response))
      .catch((err) => alert(err));
  }, []);

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
      <div className="Showitem">
        {!Bestselling ? (
          <Loading />
        ) : (
          Bestselling?.map((product) => (
            <cardBestSelling
              key={product.id}
              imageURL={product.image}
              price={product.price.toFixed(2)}
              title={product.title}
            />
          ))
        )}
      </div>
      <div className="Showitem">
        <img src="03.jpg"></img>
        <div className="itemname">Plantinha 01</div>
        <div className="itemprice">R$948,00</div>
      </div>
    </body>
  );
};

export { Bestselling, cardBestSelling };
