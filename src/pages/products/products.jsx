import { useState, useEffect } from "react";
import { getCategories, getProducts } from "../../services/products";
import {
  ProductCardDetails,
  Loading,
  SearchBar,
  SearchResultList,
  PageTitle,
  SearchCategoriesBar,
  CategoriesResultsList,
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

  const [categories, setCategories] = useState([]);
  const [results2, setResults2] = useState([]);

  useEffect(() => {
    getCategories()
      .then((response) => setCategories(response))
      .catch((err) => alert(err));
  }, []);

  return (
    <body>
      <div className="toppingpage">
        <div className="searchtopcontainer">
          <div className="search-bar-container">
            <SearchBar setResults={setResults} />
            <SearchResultList results={results} />
          </div>
          <div className="search-bar-container">
            <SearchCategoriesBar setResults2={setResults2} />
            <CategoriesResultsList results2={results2} />
          </div>
        </div>
        <div className="pageinformation">
          <PageTitle title="Products List" />
        </div>
      </div>

      <div className="imageProductDetailContainer">
        {!products ? (
          <Loading />
        ) : (
          products?.map((product) => (
            <a href={`/products/${product.id}`}>
              <>
                <ProductCardDetails
                  key={product.id}
                  imageURL={product.image}
                  price={`R$ ${product.price.toFixed(2)}`}
                  title={product.title}
                />
              </>
            </a>
          ))
        )}
      </div>
    </body>
  );
};
export default Products;
