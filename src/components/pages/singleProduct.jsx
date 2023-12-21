import { Rating } from "@mui/material";
import "../../index.scss";
import Button from "../atoms/button";
import CountBtn from "../atoms/countBtn";
import RelatedProducts from "../organisms/relatedProducts";
import { useState } from "react";

const SingleProduct = () => {
  const [desc, setDesc] = useState({ active: "Description" });
  const handleChange = (e) => {
    setDesc({ active: e.target.id });
  };
  return (
    <section>
      <div className="w-full h-[60px] xl:h-[70px] bg-filter px-3 md:px-16"></div>
      <div className=" w-full h-fit px-3 md:px-16 py-5 md:flex gap-5 lg:gap-x-8 xl:gap-x-14 border-b-2 md:py-12">
        <div className="w-full md:w-1/2 h-[300px] bg-teal-400"></div>
        <div className="w-full md:w-1/2 h-full md:pr-8 mt-3 md:mt-0 flex flex-col gap-y-3">
          <h1 className="text-3xl lg:text-5xl font-semibold">Asgaard Sofa</h1>
          <p className="text-xl lg:text-3xl font-semibold">Rp. 2.500.000</p>
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
                <div className="w-6 h-6 md:w-7 md:h-7 text-xs lg:text-base md:text-sm lg:w-10 lg:h-10 rounded-md md:rounded-lg bg-filter flex justify-center items-center">
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
                <div className="w-6 h-6 md:w-7 md:h-7 text-xs lg:text-base md:text-sm lg:w-10 lg:h-10 rounded-md md:rounded-lg bg-filter flex justify-center items-center">
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
                <div className="w-6 h-6 md:w-7 md:h-7 text-xs lg:text-base md:text-sm lg:w-10 lg:h-10 rounded-md md:rounded-lg bg-filter flex justify-center items-center">
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
                <div className="w-6 h-6 md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full bg-red-500"></div>
              </label>
              <input
                type="radio"
                className="hidden"
                id="blueOcean"
                name="color"
                value={"blueOcean"}
              />
              <label htmlFor="blueOcean">
                <div className="w-6 h-6 md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full bg-blue-500"></div>
              </label>
              <input
                type="radio"
                className="hidden"
                id="cream"
                name="color"
                value={"cream"}
              />
              <label htmlFor="cream">
                <div className="w-6 h-6 md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full bg-yellow-100"></div>
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
      <div className="w-full h-fit gap-y-10 flex flex-col items-center md:px-24 xl:px-52 md:py-12 text-gray-500 border-b-2">
        <ul className="flex gap-x-10 md:text-lg xl:text-xl">
          <li>
            <input
              type="radio"
              className="hidden"
              id="Description"
              name="desc"
              value={"Description"}
              onChange={handleChange}
            />
            <label htmlFor="Description">
              <div
                className={
                  desc.active == "Description" ? "font-semibold text-black" : ""
                }
              >
                Description
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              className="hidden"
              id="Additional-information"
              name="desc"
              value={"Additional-information"}
              onChange={handleChange}
            />
            <label htmlFor="Additional-information">
              <div
                className={
                  desc.active == "Additional-information"
                    ? "font-semibold text-black"
                    : ""
                }
              >
                Additional Information
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              className="hidden"
              id="Reviews"
              name="desc"
              value={"Reviews"}
              onChange={handleChange}
            />
            <label htmlFor="Reviews">
              <div
                className={
                  desc.active == "Reviews" ? "font-semibold text-black" : ""
                }
              >{`Reviews (5)`}</div>
            </label>
          </li>
        </ul>
        <div className="w-full ">
          {desc.active == "Description" && (
            <p className=" text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              architecto debitis! Ullam quo tempora, ratione enim odio at
              tempore minima aliquam commodi error similique iure eligendi
              magnam? Eaque, sit doloribus. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Natus blanditiis sequi architecto
              saepe. Qui, nulla dignissimos sequi maxime animi adipisci optio
              libero quidem sint amet. Odio necessitatibus laudantium ex
              facilis!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Quo dignissimos, minima animi est temporibus aspernatur
              explicabo dolorum cum culpa sapiente, repellendus alias asperiores
              voluptates totam soluta minus, sunt architecto officiis. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Neque nemo
              voluptatibus nisi laborum. Magnam sapiente quibusdam rerum harum,
              quas dolorem sed maxime doloribus iure culpa, praesentium deleniti
              tempore est neque. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Doloribus nisi mollitia magnam odio repellat
              numquam. Saepe, amet quod quae cumque rerum perferendis
              exercitationem fugiat explicabo, deserunt, maiores molestias
              praesentium corrupti.
            </p>
          )}
          {desc.active == "Additional-information" && (
            <p className=" text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              architecto debitis! Ullam quo tempora, ratione enim odio at
              tempore minima aliquam commodi error similique iure eligendi
              magnam? Eaque, sit doloribus. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Natus blanditiis sequi architecto
              saepe. Qui, nulla dignissimos sequi maxime animi adipisci optio
              libero quidem sint amet. Odio necessitatibus laudantium ex
              facilis!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Quo dignissimos, minima animi est temporibus aspernatur
              explicabo dolorum cum culpa sapiente, repellendus alias asperiores
              voluptates totam soluta minus, sunt architecto officiis. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Neque nemo
              voluptatibus nisi laborum. Magnam sapiente quibusdam rerum harum,
              quas dolorem sed maxi
            </p>
          )}
          {desc.active == "Reviews" && (
            <p className=" text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              architecto debitis! Ullamolor, sit amet consectetur adipisicing
              elit. Doloribus nisi mollitia magnam odio repellat numquam. Saepe,
              amet quod quae cumque rerum perferendis exercitationem fugiat
              explicabo, deserunt, maiores molestias praesentium corrupti.
            </p>
          )}
        </div>
      </div>
      <RelatedProducts />
    </section>
  );
};

export default SingleProduct;
