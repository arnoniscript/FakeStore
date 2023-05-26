import logo from "./logo.svg";
import "./App.css";
import { Header, Footer } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Products } from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
