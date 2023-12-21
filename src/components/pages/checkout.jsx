import { Pagination } from "@mui/material";
import bg from "../../assets/images/bgShop1.jpg";
import { products } from "../../constant";
import Card from "../atoms/card";
import FilterBar from "../molecules/filterBar";
import OfferBar from "../molecules/offerBar";

const Checkout = () => {
  return (
    <section>
      <div className="hidden w-full md:h-[275px] lg:h-[350px] overflow-hidden relative md:flex flex-col justify-center">
        <img
          src={bg}
          alt="background"
          className="object-contain absolute z-0"
        />
        <div className="h-full w-full bg-black/30 z-20 md:flex flex-col justify-center">
          <h1 className="text-center font-bold text-3xl mb-2 z-20 text-white">
            Checkout
          </h1>
          <p className="text-center font-semibold z-20 text-white">{`home > checkout`}</p>
        </div>
      </div>
      <FilterBar />
      <ul className="w-full flex flex-wrap gap-4 my-3 md:my-10 px-3 md:px-16">
        {products.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </ul>
      <div className="w-full flex justify-center items-center mt-5 md:mt-0 mb-10">
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          className="m-auto text-center"
        />
      </div>
      <OfferBar />
    </section>
  );
};

export default Checkout;
