import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchInput = () => {
  return (
    <div className="bg-white w-1/2 md:w-[50px] h-7 md:h-10 rounded-full flex items-center justify-center px-4 dark:text-black">
      <input
        type="text"
        placeholder="search"
        className="outline-none w-full bg-white text-xs"
      />
      <SearchOutlinedIcon style={{ fontSize: "small" }} />
    </div>
  );
};

export default SearchInput;
