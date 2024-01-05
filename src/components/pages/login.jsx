import Button from "../atoms/button";

const Login = () => {
  return (
    <div className="bg-filter w-full h-screen flex justify-center items-center">
      <form action="" className="w-[400px] flex flex-col gap-y-8">
        <h1 className="font-bold text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          Login First
        </h1>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            placeholder="username"
            id="username"
            className="h-[50px] px-3 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="password"
            id="password"
            className="h-[50px] px-3 rounded-md outline-none"
          />
        </div>
        <p className="text-end -mt-6">
          <a href="#">Forgot Password?</a>
        </p>
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-[50px] text-white font-semibold rounded-md">
          Login
        </Button>
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
