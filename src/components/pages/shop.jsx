import { Pagination } from "@mui/material";
import bg from "../../assets/images/bgShop1.jpg";
import { products } from "../../constant";
import Card from "../atoms/card";
import filter from "../../assets/icons/filter.png";
import grid from "../../assets/icons/grid.png";
import sequence from "../../assets/icons/sequence.png";
import line from "../../assets/icons/line.png";
import OfferBar from "../molecules/offerBar";
import { useEffect, useRef, useState } from "react";
import { discPrice } from "../../utils/discount";

const Shop = () => {
  const [sorti, setSorti] = useState("newest");
  const [prod, setProd] = useState(products);
  const handleChange = (e) => {
    setSorti(e.target.value);
  };

  useEffect(() => {
    const sorting = () => {
      if (sorti == "newest")
        return prod.sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1));
      if (sorti == "price")
        return prod.sort(
          (a, b) => a.discPr(a.disc, a.price) - b.discPr(b.disc, b.price)
        );
      if (sorti == "disc")
        return prod.filter((item) => {
          return item.disc !== "100";
        });
    };
    sorting();
  }, [sorti, prod]);

  // sorti == "price" &&
  //         prod
  //           .sort(
  //             (a, b) => a.discPr(a.disc, a.price) - b.discPr(b.disc, b.price)
  //           )
  //           .map((item) => {
  //             return <Card key={item.id} data={item} />;
  //           })}
  //       {sorti == "" &&
  //         products
  //           .sort((a, b) => a.new - b.new)
  //           .map((item) => {
  //             return <Card key={item.id} data={item} />;
  //           })}
  //       {sorti == "newest" &&
  //         prod
  //           .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1))
  //           .map((item) => {
  //             return <Card key={item.id} data={item} />;
  //           })}
  //       {sorti == "disc" &&
  //         prod
  //           .filter((item) => {
  //             return item.disc !== "100";
  //           })
  //           .map((item) => {
  //             return <Card key={item.id} data={item} />;
  //           })

  //pagination
  const [curPage, setCurPage] = useState(1);
  const itemsPerPage = 10;
  function paginate(data, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }
  const paginatedData = paginate(prod, curPage, itemsPerPage);
  const handleChangePage = (event, page) => {
    setCurPage(page);
  };
  const countPage = () => {
    if (prod.length % itemsPerPage == 0) return prod.length / itemsPerPage;
    return Math.floor(prod.length / itemsPerPage) + 1;
  };
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
            Shop
          </h1>
          <p className="text-center font-semibold z-20 text-white">{`home > shop`}</p>
        </div>
      </div>
      <div className="w-full h-[60px] xl:h-[80px] bg-filter px-3 md:px-16">
        <div className="flex h-full items-center justify-between">
          <div className="flex gap-x-4 items-center">
            <span className="flex gap-x-2 items-center">
              <img src={filter} alt="icon" className="w-4 h-4 inline" />
              <span className="text-sm font-semibold">Filter</span>
            </span>
            <img src={grid} alt="icon" className="w-4 h-4" />
            <img src={sequence} alt="icon" className="w-4 h-4" />
            <img src={line} alt="icon" className="h-6 text-black" />
            <span className="hidden md:inline">Showing 1-20 of 50 results</span>
          </div>
          <form action="" className=" flex gap-x-2 items-center">
            <label htmlFor="shortBy" className="font-semibold text-sm">
              Short By
            </label>
            <select
              name="shortBy"
              id="shortBy"
              className="h-7 outline-none px-1 bg-white"
              onChange={handleChange}
              defaultValue={"newest"}
            >
              <option value="newest">Newest</option>
              <option value="price">Price</option>
              <option value="disc">Discount</option>
            </select>
          </form>
        </div>
      </div>
      <ul className="w-full flex flex-wrap gap-4 my-3 md:my-10 px-3 md:px-16">
        {paginatedData.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </ul>
      <div className="w-full flex justify-center items-center mt-5 md:mt-0 mb-10">
        <Pagination
          count={countPage()}
          variant="outlined"
          shape="rounded"
          className="m-auto text-center"
          defaultPage={1}
          onChange={handleChangePage}
        />
      </div>
      <OfferBar />
    </section>
  );
};

export default Shop;
