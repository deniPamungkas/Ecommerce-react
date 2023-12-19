import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button className={`${props.className} flex justify-center items-center`}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Button;
