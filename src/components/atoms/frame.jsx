import PropTypes from "prop-types";

const Frame = (props) => {
  return <img className={`${props.className}`} src={props.src} alt="frame" />;
};

Frame.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  src: PropTypes.string,
};

export default Frame;
