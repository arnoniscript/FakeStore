import conection from "./conection";

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

export { getProducts, getProduct, getCategories, getTopSelling };
