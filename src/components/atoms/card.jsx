import PropTypes from "prop-types";
import { discPrice } from "../../utils/discount";

const Card = (props) => {
  const handleClick = (e) => {
    window.location.pathname = "/product/" + e.target.id;
  };
  return (
    <div
      id={props.data.id}
      className="flex-1 min-w-[125px] max-w-[200px] md:min-w-[150px] md:max-w-[225px] lg:min-w-[175px] lg:max-w-[250px] xl:min-w-[250px] xl:max-w-[350px] shrink-0 relative"
      onClick={handleClick}
    >
      <img
        src={`/images/${props.data.img}`}
        alt="jnnjnjn"
        className="w-full h-2/3"
      />
      <div className="w-full h-1/3 bg-cardbg lg:px-3 lg:py-2 px-2 py-1">
        <h1 className="xl:text-2xl text-sm lg:text-xl font-bold xl:mb-3 lg:mb-1">
          {props.data.name}
        </h1>
        <p className="xl:mb-3 lg:mb-1 lg:text-base text-xs">
          {props.data.desc}
        </p>
        <span className="lg:text-base xl:text-lg text-xs font-bold">
          {props.data.disc !== "0"
            ? `Rp.${new Intl.NumberFormat("en-US").format(
                discPrice(props.data.disc, props.data.price)
              )}`
            : `Rp.${new Intl.NumberFormat("en-US").format(props.data.price)}`}

          <span className="xl:text-base lg:text-sm md:text-xs font-semibold text-gray-600 lg:ml-4 line-through block lg:inline">
            {props.data.disc !== "0"
              ? "Rp." + new Intl.NumberFormat("en-US").format(props.data.price)
              : ""}
          </span>
        </span>
      </div>
      {props.data.disc !== "0" ? (
        <div className="w-8 h-8 lg:w-10 lg:h-10 text-xs lg:text-base bg-colorDisc rounded-full flex justify-center items-center text-white absolute right-2 top-2 lg:right-5 lg:top-5">
          -{props.data.disc}%
        </div>
      ) : null}
      {props.data.new ? (
        <div className="w-8 h-8 lg:w-10 lg:h-10 text-xs lg:text-base bg-colorNew rounded-full flex justify-center items-center text-white absolute right-2 top-2 lg:right-5 lg:top-5">
          New
        </div>
      ) : null}
      <div
        className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-black/0"
        id={props.data.id}
      ></div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.any,
  className: PropTypes.string,
  name: PropTypes.any,
  desc: PropTypes.any,
  price: PropTypes.any,
  img: PropTypes.any,
  data: PropTypes.any,
};

export default Card;
