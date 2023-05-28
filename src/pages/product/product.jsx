import {
  ProductCardDetails,
  Loading,
  SearchBar,
  SearchResultList,
} from "../../components";
import { getProduct } from "../../services/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles.css";

const Product = (info) => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    getProduct(id)
      .then((response) => setProduct(response))
      .catch((err) => alert(err));
  }, []);

  return !product ? (
    <Loading />
  ) : (
    <div className="product-container">
      {" "}
      //trabalhar neste css
      <br></br>
      <p>{product.title}</p>
      <div className="productdetail">
        {" "}
        //trabalhar neste css
        <ProductCardDetails imageURL={product.image}></ProductCardDetails>
        <div className="productinformation">
          {" "}
          //trabalhar neste css
          <p>{product.title}</p>
          <p>
            <b>Category:</b> {product.category}
          </p>
        </div>
        <div className="itemprice">
          <h1>R$ {product.price.toFixed(2)}</h1>
          <b>Description:</b>
          <p>
            <b>{product.description}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
