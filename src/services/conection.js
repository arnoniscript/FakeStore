import axios from "axios";

const conection = axios.create({
  baseURL: "https://localhost:4040",
});

export default conection;
