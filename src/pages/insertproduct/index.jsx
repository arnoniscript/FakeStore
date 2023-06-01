import React, { useState, useEffect } from "react";
import axios from "axios";
import { insertProduct } from "../../services/products";
import "./styles.css";

const ProductPost = () => {
  const [forms, setProducts] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4040/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter as categorias:", error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProducts((prevProducts) => ({
      ...prevProducts,
      [name]: value,
    }));
  };

  const handleImageURLChange = (event) => {
    const { value } = event.target;
    setProducts((prevProducts) => ({
      ...prevProducts,
      image: value,
    }));
  };

  const handleRatingChange = (event) => {
    const { value } = event.target;
    setProducts((prevProducts) => ({
      ...prevProducts,
      rating: {
        ...prevProducts.rating,
        rate: parseInt(value),
      },
    }));
  };

  const handleQuantityChange = (event) => {
    const { value } = event.target;
    setProducts((prevProducts) => ({
      ...prevProducts,
      rating: {
        ...prevProducts.rating,
        count: parseInt(value),
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const productData = {
      title: forms.title,
      price: Number(forms.price),
      description: forms.description,
      image: forms.image,
      category: forms.category,
      rating: {
        rate: Number(forms.rating.rate),
        count: Number(forms.rating.count),
      },
    };

    insertProduct(productData);

    setProducts({
      title: "",
      price: "",
      category: "",
      description: "",
      image: "",
      rating: {
        rate: 0,
        count: 0,
      },
    });
  };

  return (
    <div className="newProductDiv">
      <h1>Novo Produto</h1>
      <form className="flex-form" onSubmit={handleSubmit}>
        <div className="flex-div">
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={forms.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-div">
          <label>Preço:</label>
          <input
            type="number"
            name="price"
            value={forms.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-div">
          <label>Categoria:</label>
          <select
            name="category"
            value={forms.category}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-div">
          <label>Descrição:</label>
          <textarea
            id="text-area"
            name="description"
            value={forms.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex-div">
          <label>URL da Imagem:</label>
          <input
            type="text"
            name="image"
            value={forms.image}
            onChange={handleImageURLChange}
            required
          />
          {forms.image && <img src={forms.image} alt="Imagem do Produto" />}
        </div>
        <div className="flex-div">
          <label>Avaliação:</label>
          <input
            type="range"
            name="rating"
            min="0"
            max="5"
            value={forms.rating.rate}
            onChange={handleRatingChange}
            required
          />
          <div className="rating-preview">
            {Array.from(Array(forms.rating.rate)).map((_, index) => (
              <span key={index} className="star-filled"></span>
            ))}
            {Array.from(Array(5 - forms.rating.rate)).map((_, index) => (
              <span key={index} className="star"></span>
            ))}
          </div>
        </div>
        <div className="flex-div">
          <label>Quantidade:</label>
          <input
            type="number"
            name="count"
            value={forms.rating.count}
            onChange={handleQuantityChange}
            required
          />
        </div>
        <div className="buttonsDiv">
          <button type="submit">Adicionar Produto</button>
        </div>
      </form>
    </div>
  );
};

export default ProductPost;
