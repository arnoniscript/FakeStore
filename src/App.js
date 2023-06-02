import logo from "./logo.svg";
import "./App.css";
import { Header, Footer } from "./components";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import {
  Home,
  Products,
  Product,
  Categories,
  ProductsByCategory,
  ProductPost,
} from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/categories" element={<Categories />} />
          <Route path="/products/insertproduct" element={<ProductPost />} />
          <Route
            path="/products/category/:category"
            element={<ProductsByCategory />}
          />
          <Route
            path="/products/categories/:category"
            element={<ProductsByCategory />}
          />
          <Route path="*" element={<h1> 404 </h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
