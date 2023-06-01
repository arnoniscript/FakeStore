import conection from "./conection";
import axios from "axios";

async function getProducts() {
  const response = await conection.get("products");
  return response.data;
}

const getProduct = async (id) => {
  const response = await conection.get(`/products/${id}`);
  return response.data;
};

async function getCategories() {
  const response = await conection.get("products/categories");
  return response.data;
}

async function getTopSelling() {
  const response = await conection.get("products/topselling");
  return response.data;
}

const getProductsByCategory = async (category) => {
  const response = await conection.get(`/products/category/${category}`);
  return response.data;
};

async function insertProduct(product) {
  try {
    const response = await axios.post(
      "http://localhost:4040/products/",
      product
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao inserir o produto:", error);
    throw error;
  }
}

export {
  getProducts,
  getProduct,
  getCategories,
  getTopSelling,
  getProductsByCategory,
  insertProduct,
};
