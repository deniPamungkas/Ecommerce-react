import { Rating } from "@mui/material";
import "../../index.scss";
import Button from "../atoms/button";
import CountBtn from "../atoms/countBtn";

const SingleProduct = () => {
  return (
    <section>
      <div className="w-full h-[60px] xl:h-[70px] bg-filter px-3 md:px-16"></div>
      <div className=" w-full h-[800px] px-16 py-5 flex gap-5 lg:gap-x-8 xl:gap-x-14">
        <div className="w-1/2 h-full bg-teal-400"></div>
        <div className="w-1/2 h-full pr-8 flex flex-col gap-y-3">
          <h1 className="md:text-3xl lg:text-5xl font-semibold">
            Asgaard Sofa
          </h1>
          <p className="md:text-xl lg:text-3xl font-semibold">Rp. 2.500.000</p>
          <div className="w-full flex items-center gap-x-5">
            <Rating name="read-only" value={4} readOnly />
            <span className="md:text-sm lg:text-base">{` 5 Customer reviews`}</span>
          </div>
          <p className="text-xs lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            reprehenderit corrupti ipsum non voluptatem sequi, aperiam illo cum
            dolores modi, veritatis, voluptas explicabo praesentium soluta magni
            laudantium maiores perferendis? Saepe!
          </p>
          <div>
            <span className="font-semibold">size</span>
            <div className="flex gap-x-2 choose-size">
              <input
                type="radio"
                className="hidden"
                id="L"
                name="size"
                value={"L"}
              />
              <label htmlFor="L">
                <div className="md:w-7 md:h-7 lg:text-base md:text-sm lg:w-10 lg:h-10 rounded-lg bg-filter flex justify-center items-center">
                  L
                </div>
              </label>
              <input
                type="radio"
                className="hidden"
                id="XL"
                name="size"
                value={"XL"}
              />
              <label htmlFor="XL">
                <div className="md:w-7 md:h-7 lg:text-base md:text-sm lg:w-10 lg:h-10 rounded-lg bg-filter flex justify-center items-center">
                  XL
                </div>
              </label>
              <input
                type="radio"
                className="hidden"
                id="XS"
                name="size"
                value={"XS"}
              />
              <label htmlFor="XS">
                <div className="md:w-7 md:h-7 lg:text-base md:text-sm lg:w-10 lg:h-10 rounded-lg bg-filter flex justify-center items-center">
                  XS
                </div>
              </label>
            </div>
          </div>
          <div>
            <span className="font-semibold">color</span>
            <div className="flex gap-x-2 choose-color">
              <input
                type="radio"
                className="hidden"
                id="red"
                name="color"
                value={"red"}
              />
              <label htmlFor="red">
                <div className="md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full bg-red-500"></div>
              </label>
              <input
                type="radio"
                className="hidden"
                id="blueOcean"
                name="color"
                value={"blueOcean"}
              />
              <label htmlFor="blueOcean">
                <div className="md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full bg-blue-500"></div>
              </label>
              <input
                type="radio"
                className="hidden"
                id="cream"
                name="color"
                value={"cream"}
              />
              <label htmlFor="cream">
                <div className="md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full bg-yellow-100"></div>
              </label>
            </div>
          </div>
          <div className="w-full items-center flex gap-x-3 mt-10">
            <CountBtn />
            <Button className="border-2 border-black px-6 h-[50px] rounded-lg font-semibold">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
