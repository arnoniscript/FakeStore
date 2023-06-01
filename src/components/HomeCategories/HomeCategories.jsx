import "./styles.css";
import { BsArrowRight } from "react-icons/bs";
import React from "react";
import ProductCardDetails from "../ProductCardDetails/ProductCardDetails";
import { getCategories, getProducts } from "../../services/products";
import { useState, useEffect } from "react";

const HomeCategories = () => {
  const [categories, setCategories] = useState([]);
  const [exhibitedProducts, setExhibitedProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
        setExhibitedProducts(response.slice(0, 3));
      })
      .catch((err) => alert(err));

    getCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((err) => alert(err));
  }, []);

  const getFirstImage = (category) => {
    const result = products.filter((el) => el.category === category);
    return result[0]?.image;
  };

  return (
    <div>
      <div className="principalwhite">
        <h1>Categories</h1>
        <h2>Find what you are looking for</h2>
        <br />
        <div className="flex-container">
          <div className="homeCategoriesDisplay">
            {categories.map((category) => (
              <a href={`/products/category/${category.category}`}>
                <ProductCardDetails
                  key={category.id}
                  imageURL={getFirstImage(category.category)}
                  title={category.category}
                />
              </a>
            ))}
          </div>
        </div>
        <br />
        <div className="explore">
          <a href="/products/categories">
            Explore <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
