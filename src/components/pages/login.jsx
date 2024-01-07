import { useContext, useEffect, useState } from "react";
import Button from "../atoms/button";
import { AuthContext } from "../../context/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const { login, err, loading, setErr } = useContext(AuthContext);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(data);
  };

  useEffect(() => {
    setErr(null);
  }, [err]);

  return (
    <div className="bg-filter w-full h-screen flex justify-center items-center">
      <form
        action=""
        className="w-[90%] md:w-[400px] flex flex-col gap-y-8"
        onSubmit={handleLogin}
      >
        <h1 className="font-bold text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          Login First
        </h1>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            placeholder="username"
            id="username"
            name="username"
            className="h-[50px] px-3 rounded-md outline-none"
            value={data.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="password"
            id="password"
            name="password"
            className="h-[50px] px-3 rounded-md outline-none"
            value={data.password}
            onChange={handleChange}
            required
          />
        </div>
        <p className="text-end -mt-6">
          <a href="#">Forgot Password?</a>
        </p>
        {err &&
          toast.error(err, {
            position: toast.POSITION.BOTTOM_CENTER,
          })}
        <Button
          className={`${
            loading
              ? "bg-gray-500"
              : "bg-gradient-to-r from-cyan-500 to-blue-500"
          }  w-full h-[50px] text-white font-semibold rounded-md`}
        >
          {loading && (
            <img
              src={"/images/spinner.png"}
              className="w-5 h-5 mr-2 animate-spin"
            />
          )}
          Login
        </Button>
        <ToastContainer />
        <span className="text-center">
          New in Furniro?{" "}
          <a
            href="/register"
            className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Register
          </a>
        </span>
      </form>
    </div>
  );
};

export default Login;
