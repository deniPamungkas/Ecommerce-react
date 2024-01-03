import PropTypes from "prop-types";
import Button from "./button";
import { useEffect, useState } from "react";

const CountBtn = (props) => {
  const [val, setVal] = useState(0);
  const handlePlus = (e) => {
    e.preventDefault();
    setVal(val + 1);
  };
  const handleMinus = (e) => {
    e.preventDefault();
    if (val > 0) {
      setVal(val - 1);
    }
  };
  useEffect(() => {
    props.qty(val);
  }, [val]);

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
  qty: PropTypes.any,
};

export default CountBtn;
