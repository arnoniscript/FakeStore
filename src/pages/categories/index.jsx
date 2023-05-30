import "./styles.css";
import { getCategories } from "../../services/products";
import { useState, useEffect, useParams } from "react";
import { ProductCardDetails, PageTitle, Loading } from "../../components";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((response) => setCategories(response))
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <div className="pageinformation">
        <PageTitle title="Categories List" />
      </div>

      <div className="imageProductDetailContainer">
        {categories.length > 0 ? (
          categories.map((category) => (
            <a href={`/products/category/${category.category}`}>
              <ProductCardDetails
                key={category.id}
                title={category.category}
                imageURL={`https://loremflickr.com/299/363/${category.category}`}
              />
            </a>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Categories;
