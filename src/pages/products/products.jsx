import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response))
      .catch((err) => alert(err));
  }, []);

  return <div>aaaa criar o componente dos produtooooos</div>;
};
export default Products;
