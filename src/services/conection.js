import axios from "axios";

const conection = axios.create({
  baseURL: "http://localhost:4040",
});

export default conection;
