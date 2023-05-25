import axios from "axios";

const conection = axios.create({
  baseURL: "https://localhost:3000",
});

export default conection;
