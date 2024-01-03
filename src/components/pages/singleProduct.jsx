import { Rating } from "@mui/material";
import "../../index.scss";
import Button from "../atoms/button";
import CountBtn from "../atoms/countBtn";
import RelatedProducts from "../organisms/relatedProducts";
import { useEffect, useState } from "react";
import { products } from "../../constant";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartSlice";
import { discPrice } from "../../utils/discount";

const SingleProduct = (props) => {
  const par = useParams();
  //handle menu description
  const [desc, setDesc] = useState({ active: "Description" });
  const handleChange = (e) => {
    setDesc({ active: e.target.id });
  };
  //get single product & related products
  const datum = products.filter((item) => {
    return item.id == par.id;
  });
  const relatedProducts = products.slice(1, 9);
  const [dat, setDat] = useState({
    id: par.id,
    name: datum[0].name,
    img: datum[0].img,
    category: datum[0].category,
    disc: datum[0].disc,
    price: datum[0].price,
    size: "L",
    color: "red",
    qty: null,
  });
  const handleChangeDat = (e) => {
    if (e.target.name) {
      setDat({ ...dat, [e.target.name]: e.target.value });
    }
  };
  // window.localStorage.removeItem("cart");
  const itemQty = (e) => {
    setDat({ ...dat, ["qty"]: e });
  };

  const dispatch = useDispatch();
  const handleAddCart = (e) => {
    e.preventDefault();
    if (dat.qty != 0) return dispatch(addToCart(dat));
    return null;
  };

  const cartSum = useSelector((state) => {
    return state.cart;
  });

  console.log(cartSum.data);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cartSum.data));
    console.log("update local storage");
  }, [cartSum]);

  return (
    <section>
      <div className="w-full h-[60px] xl:h-[70px] bg-filter px-3 md:px-16"></div>
      <div className=" w-full h-fit px-3 md:px-16 md:flex gap-5 lg:gap-x-8 xl:gap-x-14 border-b-2 py-8 md:py-12">
        <div className="w-full md:w-1/2 h-[300px] bg-black/25 flex justify-center">
          <img
            src={`/images/${datum[0].img}`}
            alt="product-image"
            className="object-contain"
          />
        </div>
        <form className="w-full md:w-1/2 h-full md:pr-8 mt-3 md:mt-0 flex flex-col gap-y-3">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            {datum[0].name}
          </h1>
          <p className="text-xl lg:text-3xl font-semibold">
            Rp.{" "}
            {new Intl.NumberFormat("en-US").format(
              discPrice(datum[0].disc, datum[0].price)
            )}
          </p>
          {datum[0].disc != "0" && (
            <p className="text-xl lg:text-3xl font-semibold line-through text-gray-500  -mt-4">
              Rp. {new Intl.NumberFormat("en-US").format(datum[0].price)}
            </p>
          )}
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
                defaultChecked
                onChange={handleChangeDat}
              />
              <label htmlFor="L">
                <div className="w-6 h-6 md:w-7 md:h-7 text-[10px] lg:text-base md:text-sm lg:w-10 lg:h-10 rounded-md md:rounded-lg bg-filter flex justify-center items-center">
                  L
                </div>
              </label>
              <input
                type="radio"
                className="hidden"
                id="XL"
                name="size"
                value={"XL"}
                onChange={handleChangeDat}
              />
              <label htmlFor="XL">
                <div className="w-6 h-6 md:w-7 md:h-7 text-[10px] lg:text-base md:text-sm lg:w-10 lg:h-10 rounded-md md:rounded-lg bg-filter flex justify-center items-center">
                  XL
                </div>
              </label>
              <input
                type="radio"
                className="hidden"
                id="XS"
                name="size"
                value={"XS"}
                onChange={handleChangeDat}
              />
              <label htmlFor="XS">
                <div className="w-6 h-6 md:w-7 md:h-7 text-[10px] lg:text-base md:text-sm lg:w-10 lg:h-10 rounded-md md:rounded-lg bg-filter flex justify-center items-center">
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
                defaultChecked
                onChange={handleChangeDat}
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
                onChange={handleChangeDat}
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
                onChange={handleChangeDat}
              />
              <label htmlFor="cream">
                <div className="w-6 h-6 md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full bg-yellow-100"></div>
              </label>
            </div>
          </div>
          <div className="w-full items-center flex gap-x-3 mt-10">
            <CountBtn qty={itemQty} />
            <Button
              className="border-2 border-black px-4 h-[40px] text-xs md:text-base md:px-6 md:h-[50px] rounded-lg font-semibold"
              onClick={handleAddCart}
            >
              Add to cart
            </Button>
          </div>
        </form>
      </div>
      <div className="w-full h-fit gap-y-10 flex flex-col items-center px-8 md:px-24 xl:px-52 py-8 md:py-12 text-gray-500 border-b-2">
        <ul className="flex gap-x-3 md:gap-x-10 text-xs md:text-lg xl:text-xl">
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
        <div className="w-full min-h-[200px]">
          {desc.active == "Description" && (
            <p className=" text-justify text-xs lg:text-sm leading-5 lg:leading-6">
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
            <p className=" text-justify text-xs lg:text-sm leading-5 lg:leading-6">
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
            <p className=" text-justify text-xs lg:text-sm leading-5 lg:leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              architecto debitis! Ullamolor, sit amet consectetur adipisicing
              elit. Doloribus nisi mollitia magnam odio repellat numquam. Saepe,
              amet quod quae cumque rerum perferendis exercitationem fugiat
              explicabo, deserunt, maiores molestias praesentium corrupti.
            </p>
          )}
        </div>
      </div>
      {/* <Carousel /> */}
      <RelatedProducts data={relatedProducts} />
    </section>
  );
};

export default SingleProduct;
