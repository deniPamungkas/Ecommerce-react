import { createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext();
const AuthContextComp = (props) => {
  const login = async (e) => {
    try {
      const response = await axios.post("", e);
    } catch (error) {}
  };
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};

AuthContextComp.propTypes = {
  children: PropTypes.any,
};

export default AuthContextComp;
