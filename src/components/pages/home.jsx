import Header from "../organisms/header";
import Inspiration from "../organisms/inspiration";
import OurProducts from "../organisms/ourProducts";
import Range from "../organisms/range";

const Home = () => {
  return (
    <section>
      <Header />
      <Range />
      <hr />
      <OurProducts />
      <Inspiration />
    </section>
  );
};

export default Home;
