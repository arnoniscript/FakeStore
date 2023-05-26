import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import { ProductCardDetails, Loading } from "../../components";
import "./styles.css";

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response))
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="imageProductDetailContainer">
      {!products ? (
        <Loading />
      ) : (
        products?.map((product) => (
          <ProductCardDetails
            key={product.id}
            imageURL={product.image}
            price={product.price.toFixed(2)}
            title={product.title}
          />
        ))
      )}
    </div>
  );
};
export default Products;
