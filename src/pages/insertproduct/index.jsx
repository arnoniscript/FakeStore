import React, { useState, useEffect } from "react";
import axios from "axios";
import { insertProduct } from "../../services/products";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

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

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

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

    insertProduct(productData)
      .then(() => {
        setSuccessMessage(
          `Produto "${forms.title}" adicionado com sucesso na categoria "${forms.category}".`
        );
        setErrorMessage("");
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
      })
      .catch((error) => {
        setErrorMessage(
          "Erro ao adicionar o produto. Por favor, tente novamente."
        );
        setSuccessMessage("");
        console.error("Erro ao adicionar o produto:", error);
      });
  };

  const handleCancel = () => {
    setIsConfirmationVisible(true);
  };

  const handleConfirmCancel = () => {
    setIsConfirmationVisible(false);
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

  const handleCancelCancel = () => {
    setIsConfirmationVisible(false);
  };

  return (
    <div className="newProductDiv">
      <h1>Novo Produto</h1>
      {successMessage && (
        <div className="successMessage">
          <p>{successMessage}</p>
        </div>
      )}
      {errorMessage && (
        <div className="errorMessage">
          <p>{errorMessage}</p>
        </div>
      )}
      {isConfirmationVisible && (
        <div className="cancelConfirmation">
          <div className="cancelConfirmation-content">
            <p>Deseja cancelar o envio?</p>
            <button onClick={handleConfirmCancel}>Sim</button>
            <button onClick={handleCancelCancel}>Não</button>
          </div>
        </div>
      )}
      <form className="flex-form" onSubmit={handleSubmit}>
        <div className="flex-div">
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={forms.title}
            onChange={handleChange}
            required
            className="flex-div-input"
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
              <option key={category.id} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
        </div>
        <div className="inline-fields">
          <div className="flex-div">
            <label>Avaliação:</label>
            <div className="rating-input">
              {Array.from(Array(5)).map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={index + 1}
                    checked={forms.rating.rate === index + 1}
                    onChange={handleRatingChange}
                  />
                  <span
                    className={
                      index < forms.rating.rate ? "star" : "empty-star"
                    }
                  >
                    ★
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex-div flex-div-quantity">
            <label>Quantidade:</label>
            <input
              type="number"
              name="count"
              value={forms.rating.count}
              onChange={handleQuantityChange}
              required
            />
          </div>
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
            className="flex-div-input"
          />
          {forms.image && <img src={forms.image} alt="Imagem do Produto" />}
        </div>
        <div className="buttonsDiv">
          <button className="button" type="submit">
            Adicionar Produto
          </button>
          <button className="button" type="button" onClick={handleCancel}>
            Cancelar Envio
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductPost;
