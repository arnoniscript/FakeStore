import {
  Bestselling,
  Aboutus,
  HomeCategories,
  TopSelling,
} from "../../components";

const Home = () => {
  return (
    <main>
      <div className="containerbody">
        <Bestselling />
        <TopSelling />
      </div>
      <Aboutus />
      <HomeCategories />
    </main>
  );
};

export default Home;
