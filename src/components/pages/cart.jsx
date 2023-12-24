import bg from "../../assets/images/bgShop1.jpg";
import OfferBar from "../molecules/offerBar";
import trash from "../../assets/icons/trash.png";
import Button from "../atoms/button";

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
      <div className="w-full h-fit flex-col px-3 md:px-7 lg:flex lg:flex-row lg:gap-x-5 xl:gap-x-10 lg:px-10 xl:px-16 py-3 md:py-7 xl:py-14">
        <div className="lg:w-3/4 xl:w-2/3 h-full mb-2 lg:mb-0">
          <div className="md:hidden w-full h-[300px] bg-teal-100"></div>
          <table className="hidden md:table table-auto w-full">
            <thead className="">
              <tr className="h-[50px] bg-filter text-start">
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-start">
                <td>
                  <div className="w-20 h-20 bg-teal-200 rounded-lg"></div>
                </td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Alfreds Futterkiste</td>
                <td>Germany</td>
                <td>
                  <img src={trash} alt="jhjhjhjh" className="w-5 h-5" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lg:w-1/4 xl:w-1/3 h-fit bg-filter md:py-10 py-5 px-10 md:px-32 lg:px-8 xl:px-16">
          <h1 className="font-bold lg:text-xl xl:text-2xl text-center mb-10">
            Cart Totals
          </h1>
          <div className="flex w-full justify-between items-center mb-7">
            <span className="font-semibold lg:text-base xl:text-lg">
              Subtotal:
            </span>
            <span className="font-semibold lg:text-sm xl:text-base text-gray-700">
              Rp. 2.500.000
            </span>
          </div>
          <div className="flex w-full justify-between mb-10">
            <span className="font-semibold lg:text-base xl:text-lg">
              Total:
            </span>
            <span className="font-semibold text-lg md:text-xl lg:text-base xl:text-xl text-primary">
              Rp. 2.500.000
            </span>
          </div>
          <Button
            className={
              "border-2 border-black h-[40px] w-[100px] text-base md:h-[40px] md:w-[120px] xl:h-[50px] xl:w-[150px] rounded-xl m-auto md:text-lg xl:text-xl font-semibold"
            }
          >
            Checkout
          </Button>
        </div>
      </div>
      <OfferBar />
    </section>
  );
};

export default Cart;
