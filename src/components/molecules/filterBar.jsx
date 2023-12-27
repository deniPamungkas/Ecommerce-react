import filter from "../../assets/icons/filter.png";
import grid from "../../assets/icons/grid.png";
import sequence from "../../assets/icons/sequence.png";
import line from "../../assets/icons/line.png";

const FilterBar = () => {
  return (
    <div className="w-full h-[60px] xl:h-[80px] bg-red-500 px-3 md:px-10 lg:px-16">
      <div className="flex h-full items-center justify-between">
        <div className="flex gap-x-4 items-center">
          <span className="flex gap-x-2 items-center">
            <img src={filter} alt="icon" className="w-4 h-4 inline" />
            <span className="text-sm font-semibold">Filter</span>
          </span>
          <img src={grid} alt="icon" className="w-4 h-4" />
          <img src={sequence} alt="icon" className="w-4 h-4" />
          <img src={line} alt="icon" className="h-6 text-black" />
          <span className="hidden md:inline text-xs lg:text-base">
            Showing 1-20 of 50 results
          </span>
        </div>
        <form action="" className=" flex gap-x-2 items-center">
          <label htmlFor="shortBy" className="font-semibold text-sm">
            Short By
          </label>
          <select
            name="shortBy"
            id="shortBy"
            className="h-7 outline-none px-1 bg-white"
          >
            <option value="">--short by--</option>
            <option value="price">Price</option>
            <option value="newest">Newest</option>
            <option value="disc">Discount</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default FilterBar;
