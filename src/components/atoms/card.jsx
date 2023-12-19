import PropTypes from "prop-types";
import { discPrice } from "../../utils/discount";

const Card = (props) => {
  return (
    <div className="md:w-[175px] md:h-[270px] lg:w-[235px] lg:h-[350px] xl:w-[285px] xl:h-[446px] shrink-0 relative">
      <img
        src={props.data.img}
        alt="jnnjnjn"
        className="w-full h-2/3 bg-red-700"
      />
      <div className="w-full h-1/3 bg-cardbg lg:px-3 lg:py-2 md:px-2 md:py-1">
        <h1 className="xl:text-2xl md:text-base lg:text-xl font-bold xl:mb-3 lg:mb-1">
          {props.data.name}
        </h1>
        <p className="xl:mb-3 lg:mb-1 lg:text-base md:text-xs">
          {props.data.desc}
        </p>
        <span className="lg:text-base xl:text-lg md:text-xs font-bold">
          {props.data.disc
            ? `Rp.${new Intl.NumberFormat("en-US").format(
                discPrice(props.data.disc, props.data.price)
              )}`
            : `Rp.${new Intl.NumberFormat("en-US").format(props.data.price)}`}

          <span className="xl:text-base lg:text-sm md:text-xs font-semibold text-gray-600 lg:ml-4 line-through block lg:inline">
            {props.data.disc
              ? "Rp." + new Intl.NumberFormat("en-US").format(props.data.price)
              : ""}
          </span>
        </span>
      </div>
      {props.data.disc ? (
        <div className="w-8 h-8 lg:w-10 lg:h-10 text-xs lg:text-base bg-colorDisc rounded-full flex justify-center items-center text-white absolute right-2 top-2 lg:right-5 lg:top-5">
          -{props.data.disc}%
        </div>
      ) : null}
      {props.data.new ? (
        <div className="w-8 h-8 lg:w-10 lg:h-10 text-xs lg:text-base bg-colorNew rounded-full flex justify-center items-center text-white absolute right-2 top-2 lg:right-5 lg:top-5">
          New
        </div>
      ) : null}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  name: PropTypes.any,
  desc: PropTypes.any,
  price: PropTypes.any,
  img: PropTypes.any,
  data: PropTypes.any,
};

export default Card;
