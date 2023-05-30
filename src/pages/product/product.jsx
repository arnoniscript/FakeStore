import {
  ProductCardDetails,
  Loading,
  SearchBar,
  SearchResultList,
} from "../../components";
import { getProduct } from "../../services/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Rating } from "@mui/material";
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
    <>
      <div className="productDiv">
        <br></br>
        <p>{product.title}</p>
        <div className="onlyproductContent">
          <ProductCardDetails imageURL={product.image}></ProductCardDetails>
          <div className="productInformation">
            <div className="clientRating">
              <p>
                <b>Nome:</b> {product.title}
              </p>
              <p>
                <b>Categoria:</b> {product.category}
              </p>
              <div className="ratingDiv">
                <Rating
                  name="read-only"
                  value={parseFloat(product.rate)}
                  readOnly
                  precision={0.1}
                />
                <span>{product.count} avaliações de clientes</span>
              </div>
            </div>
            <div className="productPrice">
              <h1>R$ {product.price.toFixed(2)}</h1>
              <b>Descrição do Produto:</b>
              <p>
                <b>{product.description}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
