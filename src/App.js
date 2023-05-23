import logo from "./logo.svg";
import "./App.css";
import { Header, Bestselling, Aboutus, HomeCategories } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Bestselling />
      <Aboutus />
      <HomeCategories />
    </div>
  );
}

export default App;
