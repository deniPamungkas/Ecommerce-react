import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext();
const AuthContextComp = (props) => {
  const [userData, setUserData] = useState(
    JSON.parse(window.sessionStorage.getItem("userData")) || null
  );
  useEffect(() => {
    window.sessionStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/auth/login", e, {
        withCredentials: true,
      });
      setUserData(response.data);
      window.location.pathname = "/";
      setErr(null);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      setLoading(true);
      setErr(error.response.data);
      return error.response;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    window.sessionStorage.removeItem("userData");
    try {
      const response = await axios.get("http://localhost:5000/auth/logout", {
        withCredentials: true,
      });
      window.location.reload();
      return response;
    } catch (error) {
      return error.response;
    }
  };
  return (
    <AuthContext.Provider value={{ login, err, loading, setErr, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthContextComp.propTypes = {
  children: PropTypes.any,
};

export default AuthContextComp;
