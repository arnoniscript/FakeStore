import "./styles.css";
import { getCategories } from "../../services/products";
import { useState, useEffect, useParams } from "react";
import { ProductCardDetails, PageTitle, Loading } from "../../components";

const Categories = (info) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then((response) => setCategories(response))
      .catch((err) => alert(err));
  }, []);

  return (
    <body>
      <div className="pageinformation">
        <PageTitle title="Categories List" />
      </div>

      <div className="imageProductDetailContainer">
        {!categories ? (
          <Loading />
        ) : (
          categories.map((categoryItem) => (
            <ProductCardDetails
              key={categoryItem.id}
              title={categoryItem.category}
            />
          ))
        )}
      </div>
    </body>
  );
};

export default Categories;
