import { useDispatch, useSelector } from "react-redux";
import bg from "../../assets/images/bgShop1.jpg";
import Button from "../atoms/button";
import Input from "../atoms/input";
import OfferBar from "../molecules/offerBar";
import { discPrice } from "../../utils/discount";
import { clearCart } from "../../redux/actions/cartSlice";
import Swal from "sweetalert2";

const Checkout = () => {
  //get store from redux
  const carts = useSelector((state) => {
    return state.cart;
  });
  const dispatch = useDispatch();
  //get data user if logged in
  const user = JSON.parse(window.sessionStorage.getItem("userData"));

  const popup = () => {
    Swal.fire({
      title: "Good job!",
      text: "Checkout Successfully",
      icon: "success",
    });
  };

  // Menjumlahkan properti 'price'
  const totalValue =
    user != null
      ? carts?.data?.reduce((accumulator, currentValue) => {
          return (
            accumulator +
            discPrice(currentValue.disc, currentValue.price) * currentValue.qty
          );
        }, 0)
      : null;

  const handleCheckout = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    popup();
  };
  if (user != null) {
    return (
      <section>
        {carts?.data?.length ? (
          <>
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
            <div className="w-full h-fit px-7 md:px-12 lg:px-32 xl:px-60 md:py-10">
              <form
                onSubmit={handleCheckout}
                className="flex flex-col md:flex-row md:gap-10 xl:gap-x-20"
              >
                <div className="flex-1">
                  <h1 className="text-xl md:text-3xl font-bold mb-8">
                    Billings Details
                  </h1>
                  <Input
                    required
                    inputname={"First Name"}
                    id={"firstName"}
                    type={"text"}
                  />
                  <Input
                    required
                    inputname={"Last Name"}
                    id={"lastName"}
                    type={"text"}
                  />
                  <Input
                    required
                    inputname={"Company Name (Optional)"}
                    id={"companyName"}
                    type={"text"}
                  />
                  <Input
                    required
                    inputname={"Country/Region"}
                    id={"country"}
                    type={"text"}
                  />
                  <Input
                    required
                    inputname={"Street Adress"}
                    id={"streetAdress"}
                    type={"text"}
                  />
                  <Input
                    required
                    inputname={"Town/City"}
                    id={"city"}
                    type={"text"}
                  />
                  <Input
                    required
                    inputname={"Province"}
                    id={"province"}
                    type={"text"}
                  />
                  <Input
                    required
                    inputname={"Postal Code"}
                    id={"postalCode"}
                    type={"text"}
                  />
                  <Input
                    required
                    inputname={"Phone"}
                    id={"phone"}
                    type={"text"}
                  />
                  <Input
                    required
                    inputname={"Email Adress"}
                    id={"email"}
                    type={"text"}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-y-4 py-5 md:py-16">
                  <div className="w-full flex  justify-between">
                    <span className="font-semibold text-xl md:text-2xl">
                      Product
                    </span>
                    <span className="font-semibold text-xl md:text-2xl">
                      Subtotal
                    </span>
                  </div>
                  <ul className="w-full">
                    <li className="w-full text-sm md:text-base">
                      {carts?.data?.map((item) => {
                        return (
                          <div key={item._id} className="flex justify-between">
                            <span>{`${item.name} x ${item.qty}`}</span>
                            <span className="font-semibold">{`Rp.${new Intl.NumberFormat(
                              "en-US"
                            ).format(
                              discPrice(item.disc, item.price) * item.qty
                            )}`}</span>
                          </div>
                        );
                      })}
                    </li>
                  </ul>
                  <div className="w-full flex  justify-between">
                    <span className="font-semibold text-base md:text-lg">
                      Total
                    </span>
                    <span className="font-semibold text-xl md:text-2xl text-primary">
                      {`Rp.${new Intl.NumberFormat("en-US").format(
                        totalValue
                      )}`}
                    </span>
                  </div>
                  <hr />
                  <div className="choose-payment flex flex-col gap-y-3 text-xs md:text-sm">
                    <span>
                      <input
                        type="radio"
                        id="DBT"
                        name="payment"
                        value={"directBankTransfer"}
                        className="mr-2 mb-3"
                        required
                      />
                      <label
                        htmlFor="DBT"
                        className="text-gray-500 font-semibold"
                      >
                        Direct Bank Transfer
                      </label>
                      <p className="text-gray-500 block">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </span>
                    <span className="flex gap-x-2 mt-2">
                      <input
                        type="radio"
                        id="COD"
                        name="payment"
                        value={"cashOnDelivery"}
                        required
                      />
                      <label
                        htmlFor="COD"
                        className="text-gray-500 font-semibold"
                      >
                        Cash on delivery
                      </label>
                    </span>
                    <span className="mt-5">
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our{" "}
                      <strong>privacy policy.</strong>
                    </span>
                  </div>
                  <Button
                    className={"border-2 border-black h-[50px] font-semibold"}
                  >
                    Place Order
                  </Button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="w-full min-h-[500px] py-32 flex flex-col gap-y-3 items-center mb-5">
            <img
              src={`/images/cartEmpty.png`}
              alt="cart"
              className="w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
            />
            <h1 className="md:text-3xl text-2xl font-bold">
              Your cart is empty, shop now!
            </h1>
            <Button
              className="bg-gradient-to-r from-purple-400 to-primary text-white w-[150px] h-[40px] md:w-[200px] md:h-[50px] md:text-2xl text-lg rounded-full font-semibold"
              onClick={(e) => {
                e.preventDefault;
                window.location.pathname = "/shop";
              }}
            >
              Shop
            </Button>
          </div>
        )}

        <OfferBar />
      </section>
    );
  } else {
    return (
      <section>
        <div className=" w-full min-h-[500px] flex justify-center items-center">
          <div className="flex flex-col gap-y-3 items-center">
            <img
              src={`/images/cart.png`}
              alt="cart"
              className="w-[150px] h-[150px] md:w-[250px] md:h-[250px]"
            />
            <h1 className="md:text-3xl text-2xl font-bold">
              You`re not logged in yet
            </h1>
            <Button
              className="bg-gradient-to-r from-purple-400 to-primary text-white w-[150px] h-[40px] md:w-[200px] md:h-[50px] md:text-2xl text-lg rounded-full font-semibold"
              onClick={(e) => {
                e.preventDefault;
                window.location.pathname = "/login";
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </section>
    );
  }
};

export default Checkout;
