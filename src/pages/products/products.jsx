import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import {
  ProductCardDetails,
  Loading,
  SearchBar,
  SearchResultList,
} from "../../components";
import "./styles.css";

const Products = () => {
  const [products, setProducts] = useState();
  const [results, setResults] = useState([]);
  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response))
      .catch((err) => alert(err));
  }, []);

  return (
    <body>
      <div className="toppingpage">
        <div className="App">
          <div className="search-bar-container">
            <SearchBar setResults={setResults} />
            <SearchResultList results={results} />
          </div>
        </div>
      </div>

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
    </body>
  );
};
export default Products;
