import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PropTypes from "prop-types";

const SearchInput = ({ se }) => {
  const handleChangeSearchInput = (e) => {
    se(e.target.value);
  };
  return (
    <form className="bg-white w-1/2 md:w-[200px] xl:w-[300px] h-7 md:h-9 rounded-full flex items-center justify-center px-4 dark:text-black">
      <input
        type="text"
        placeholder="search"
        className="outline-none w-full bg-white text-xs"
        onChange={handleChangeSearchInput}
      />
      <SearchOutlinedIcon style={{ fontSize: "small" }} />
    </form>
  );
};

SearchInput.propTypes = {
  se: PropTypes.any,
  handleSearch: PropTypes.any,
};

export default SearchInput;
