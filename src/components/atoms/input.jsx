import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div className={`${props.className} mb-5`}>
      <label htmlFor={props.id} className="text-sm font-semibold">
        {props.inputname}
      </label>
      <input
        {...props}
        id={props.id}
        type={props.type}
        className={`${props.inputClassName} outline-none h-[40px] rounded-md w-full md:w-[300px] lg:w-[400px] block border-2 mt-2 px-2`}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.any,
  type: PropTypes.any,
  inputname: PropTypes.any,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default Input;
