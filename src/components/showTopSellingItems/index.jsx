import { CardBestSelling, Loading } from "../../components";
import { useState, useEffect } from "react";
import { getTopSelling } from "../../services/products";

const TopSelling = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    getTopSelling()
      .then((response) => setProducts(response))
      .catch((err) => alert(err));
  }, []);

  return (
    <main>
      <div className="imageProductDetailContainer">
        {!products ? (
          <Loading />
        ) : (
          products?.map((product) => (
            <a href={`/products/${product.id}`}>
              <CardBestSelling
                key={product.id}
                imageURL={product.image}
                price={product.price.toFixed(2)}
                title={product.title}
              />
            </a>
          ))
        )}
      </div>
    </main>
  );
};

export default TopSelling;
