import Card from "../atoms/card";
import { products } from "../../constant";
import Button from "../atoms/button";
import { Link } from "react-router-dom";

const OurProducts = () => {
  return (
    <section className="px-3 md:px-16 w-full h-fit py-8">
      <h1 className="font-bold text-xl md:text-2xl text-center mb-7">
        Our Products
      </h1>
      <ul className="w-full flex flex-wrap gap-4">
        {products.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </ul>
      <Link to={"/shop"}>
        <Button
          className={
            "bg-white border-2 border-primary px-5 py-1 text-xs xl:px-16 lg:px-12 md:px-10 text-primary font-semibold lg:py-2 lg:text-base m-auto mt-8"
          }
        >
          Show More
        </Button>
      </Link>
    </section>
  );
};

export default OurProducts;
