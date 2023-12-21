import bg from "../../assets/images/bgShop1.jpg";
import OfferBar from "../molecules/offerBar";

const Cart = () => {
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
            Cart
          </h1>
          <p className="text-center font-semibold z-20 text-white">{`home > cart`}</p>
        </div>
      </div>
      <OfferBar />
    </section>
  );
};

export default Cart;
