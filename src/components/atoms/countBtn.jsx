import PropTypes from "prop-types";
import Button from "./button";
import { useState } from "react";

const CountBtn = () => {
  const [val, setVal] = useState(0);
  const handlePlus = () => {
    setVal(val + 1);
  };
  const handleMinus = () => {
    if (val > 0) return setVal(val - 1);
  };
  return (
    <div className=" border-2 border-black overflow-hidden flex items-center rounded-lg w-fit h-[40px] md:h-[50px]">
      <Button
        onClick={handleMinus}
        className={" w-6 md:w-8 h-full text-sm md:text-lg"}
      >
        -
      </Button>
      <span className=" w-6 md:w-8 h-full flex items-center justify-center">
        {val}
      </span>
      <Button
        onClick={handlePlus}
        className={" w-6 md:w-8 h-full text-sm md:text-lg"}
      >
        +
      </Button>
    </div>
  );
};

CountBtn.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default CountBtn;
