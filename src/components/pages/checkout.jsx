import bg from "../../assets/images/bgShop1.jpg";
import Button from "../atoms/button";
import Input from "../atoms/input";
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
      <div className="w-full h-fit px-7 md:px-12 lg:px-32 xl:px-60 md:py-10">
        <form
          action=""
          className="flex flex-col md:flex-row md:gap-10 xl:gap-x-20"
        >
          <div className="flex-1">
            <h1 className="text-xl md:text-3xl font-bold mb-8">
              Billings Details
            </h1>
            <Input inputName={"First Name"} id={"firstName"} type={"text"} />
            <Input inputName={"Last Name"} id={"lastName"} type={"text"} />
            <Input
              inputName={"Company Name (Optional)"}
              id={"companyName"}
              type={"text"}
            />
            <Input inputName={"Country/Region"} id={"country"} type={"text"} />
            <Input
              inputName={"Street Adress"}
              id={"streetAdress"}
              type={"text"}
            />
            <Input inputName={"Town/City"} id={"city"} type={"text"} />
            <Input inputName={"Province"} id={"province"} type={"text"} />
            <Input inputName={"Postal Code"} id={"postalCode"} type={"text"} />
            <Input inputName={"Phone"} id={"phone"} type={"text"} />
            <Input inputName={"Email Adress"} id={"email"} type={"text"} />
          </div>
          <div className="flex-1 flex flex-col gap-y-4 py-5 md:py-16">
            <div className="w-full flex  justify-between">
              <span className="font-semibold text-xl md:text-2xl">Product</span>
              <span className="font-semibold text-xl md:text-2xl">
                Subtotal
              </span>
            </div>
            <ul className="w-full">
              <li className="w-full flex justify-between text-sm md:text-base">
                <span>{`asgaard sofa x ${1}`}</span>
                <span className="font-semibold">{`Rp. 2.500.000`}</span>
              </li>
            </ul>
            <div className="w-full flex  justify-between">
              <span className="font-semibold text-base md:text-lg">Total</span>
              <span className="font-semibold text-xl md:text-2xl text-primary">
                Rp. 2.500.000
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
                />
                <label htmlFor="DBT" className="text-gray-500 font-semibold">
                  Direct Bank Transfer
                </label>
                <p className="text-gray-500 block">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </span>
              <span className="flex gap-x-2 mt-2">
                <input
                  type="radio"
                  id="COD"
                  name="payment"
                  value={"cashOnDelivery"}
                />
                <label htmlFor="COD" className="text-gray-500 font-semibold">
                  Cash on delivery
                </label>
              </span>
              <span className="mt-5">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <strong>privacy policy.</strong>
              </span>
            </div>
            <Button className={"border-2 border-black h-[50px] font-semibold"}>
              Place Order
            </Button>
          </div>
        </form>
      </div>
      <OfferBar />
    </section>
  );
};

export default Checkout;
