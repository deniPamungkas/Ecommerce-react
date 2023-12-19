import Card from "../atoms/card";
import { products } from "../../constant";

const OurProducts = () => {
  return (
    <section className="px-16 w-full xl:h-[685] py-10">
      <h1 className="font-bold text-3xl text-center mb-7">Our Products</h1>
      <ul className="w-full flex flex-wrap gap-4">
        {products.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </ul>
    </section>
  );
};

export default OurProducts;
