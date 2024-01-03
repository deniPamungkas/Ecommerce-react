import { Pagination } from "@mui/material";
import bg from "../../assets/images/bgShop1.jpg";
import { products } from "../../constant";
import Card from "../atoms/card";
import filter from "../../assets/icons/filter.png";
import grid from "../../assets/icons/grid.png";
import sequence from "../../assets/icons/sequence.png";
import line from "../../assets/icons/line.png";
import OfferBar from "../molecules/offerBar";
import { useEffect, useState } from "react";
import SearchInput from "../atoms/searchInput";
import { discPrice } from "../../utils/discount";

const Shop = () => {
  const [selectedSearchInput, setSelectedSearchInput] = useState("all");
  const [product, setProduct] = useState([...products]);
  const [data, setData] = useState(product);

  //handle sortBy
  const [selectedSort, setSelectedSort] = useState("newest");
  const [reverseData, setReverseData] = useState(false);
  const handleChange = (e) => {
    setSelectedSort(e.target.value);
  };
  const handleReverse = () => {
    setReverseData((cur) => !cur);
  };

  //search search input
  const search = (e) => {
    setSelectedSearchInput(e.toLowerCase());
    return setProduct(
      products.filter((item) => {
        return (
          item.category.toLowerCase().includes(e.toLowerCase()) ||
          item.name.toLowerCase().includes(e.toLowerCase()) ||
          item.desc.toLowerCase().includes(e.toLowerCase())
        );
      })
    );
  };

  //handle category
  const [selectedCategory, setSelectedCategory] = useState("all");
  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    const sort = () => {
      if (selectedCategory !== "all") {
        return setData(() => {
          /////////
          if (selectedSort == "newest") {
            return [
              ...product
                .filter((item) => {
                  return item.category == selectedCategory;
                })
                .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1)),
            ];
          }
          ///////////
          if (selectedSort == "price") {
            return [
              ...product
                .filter((item) => {
                  return item.category == selectedCategory;
                })
                .sort(
                  (a, b) =>
                    discPrice(a.disc, a.price) - discPrice(b.disc, b.price)
                ),
            ];
          }
          ///////////
          if (selectedSort == "disc") {
            return [
              ...product
                .filter((item) => {
                  return item.category == selectedCategory;
                })
                .filter((item) => {
                  return item.disc != "0";
                }),
            ];
          }
          //////////
          else {
            [
              ...product.filter((item) => {
                return item.category == selectedCategory;
              }),
            ];
          }
          /////////
        });
      } else {
        return setData(() => {
          /////////
          if (selectedSort == "newest") {
            return [
              ...product.sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1)),
            ];
          }
          ///////////
          if (selectedSort == "price") {
            return [
              ...product.sort(
                (a, b) =>
                  discPrice(a.disc, a.price) - discPrice(b.disc, b.price)
              ),
            ];
          }
          ///////////
          if (selectedSort == "disc") {
            return [
              ...product.filter((item) => {
                return item.disc != "0";
              }),
            ];
          }
          //////////
          else {
            [
              ...product.filter((item) => {
                return item.category == selectedCategory;
              }),
            ];
          }
          /////////
        });
      }
    };
    sort();
  }, [selectedSearchInput, selectedCategory, selectedSort]);

  //useeffect hadle asc/desc
  useEffect(() => {
    setData(data.slice().reverse());
  }, [reverseData]);

  //pagination
  const [curPage, setCurPage] = useState(1);
  const itemsPerPage = 10;
  function paginate(data, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data?.slice(startIndex, endIndex);
  }
  const paginatedData = paginate(data, curPage, itemsPerPage);
  const handleChangePage = (event, page) => {
    setCurPage(page);
  };
  const countPage = () => {
    if (data.length % itemsPerPage == 0) return data.length / itemsPerPage;
    return Math.floor(data.length / itemsPerPage) + 1;
  };
  const currIndex = (curPage - 1) * itemsPerPage + 1;
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
      <div className="w-full h-[80px] md:h-[100px] lg:h-[60px] xl:h-[80px] bg-filter py-0 md:py-1 lg:py-0 px-3 md:px-10 xl:px-16 text-[10px] md:text-sm">
        <div className="flex h-1/2 lg:h-full items-center justify-between">
          <div className="flex gap-x-2 md:gap-x-3 items-center ">
            <span className="flex gap-x-1 items-center">
              <img
                src={filter}
                alt="icon"
                className="w-2 h-2 md:w-4 md:h-4 inline"
              />
              <div className="text-[10px] md:text-sm h-fit flex items-center font-semibold">
                Filter
              </div>
            </span>
            <img src={grid} alt="icon" className="w-2 h-2 md:w-4 md:h-4" />
            <img
              src={sequence}
              alt="icon"
              className="w-2 h-2 md:w-4 md:h-4"
              onClick={handleReverse}
            />
            <img src={line} alt="icon" className="h-4 md:h-6 text-black" />
            <span className="hidden lg:inline text-sm xl:text-base">
              Showing{" "}
              {`${currIndex}-${
                curPage == countPage() ? data.length : curPage * itemsPerPage
              }`}{" "}
              of {data.length} results
            </span>
          </div>
          <div className="hidden lg:flex">
            <SearchInput se={search} />
          </div>
          <div className="flex gap-x-4">
            <form action="" className=" flex gap-x-2 items-center">
              <label htmlFor="shortBy" className="font-semibold">
                Short By
              </label>
              <select
                name="shortBy"
                id="shortBy"
                className="h-5 md:h-7 outline-none px-0 md:px-1 bg-white"
                onChange={handleChange}
                defaultValue={"newest"}
              >
                <option value="newest">Newest</option>
                <option value="price">Price</option>
                <option value="disc">Discount</option>
              </select>
            </form>
            <form action="" className=" flex gap-x-2 items-center">
              <label htmlFor="shortBy" className="font-semibold">
                Category
              </label>
              <select
                name="shortBy"
                id="shortBy"
                className="h-5 md:h-7 outline-none px-0 md:px-1 bg-white"
                onChange={handleChangeCategory}
                defaultValue={"newest"}
              >
                <option value="all">All</option>
                <option value="sofa">Sofa</option>
                <option value="lamp">Lamp</option>
                <option value="bed">Bed</option>
                <option value="chair">Chair</option>
              </select>
            </form>
          </div>
        </div>
        <div className="mt-1 md:mt-0 flex items-center justify-between lg:hidden w-full">
          <SearchInput se={search} />
          <span className="text-[10px] md:text-sm text-end">
            Showing{" "}
            {`${currIndex}-${
              curPage == countPage() ? data.length : curPage * itemsPerPage
            }`}{" "}
            of {data.length} results
          </span>
        </div>
      </div>
      <ul className="w-full flex flex-wrap gap-2 my-3 md:my-10 px-3 md:px-16">
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
          page={curPage}
          onChange={handleChangePage}
        />
      </div>
      <OfferBar />
    </section>
  );
};

export default Shop;
