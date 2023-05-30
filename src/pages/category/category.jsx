import { ProductCardDetails, Loading, PageTitle } from "../../components";
import { getProductsByCategory } from "../../services/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles.css";

const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProductsByCategory(category)
      .then((response) => setProducts(response))
      .catch((err) => alert(err));
  }, [category]);

  return (
    <div>
      <div className="toppingpage">
        <div className="pageinformation">
          <PageTitle title={`${category} List`} />
        </div>
      </div>
      <div className="imageProductDetailContainer">
        {!products ? (
          <Loading />
        ) : (
          products &&
          products.map((product) => (
            <a href={`/products/${product.id}`} key={product.id}>
              <ProductCardDetails
                imageURL={product.image}
                price={`R$ ${product.price.toFixed(2)}`}
                title={product.title}
              />
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsByCategory;
