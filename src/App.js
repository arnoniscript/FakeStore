import logo from "./logo.svg";
import "./App.css";
import {
  Header,
  Bestselling,
  Aboutus,
  HomeCategories,
  Footer,
} from "./components";

function App() {
  return (
    <div>
      <Header />
      <Bestselling />
      <Aboutus />
      <HomeCategories />
      <Footer />
    </div>
  );
}

export default App;
