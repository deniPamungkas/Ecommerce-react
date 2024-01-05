import Button from "../atoms/button";

const Register = () => {
  return (
    <div className="bg-filter w-full h-screen flex justify-center items-center">
      <form action="" className="w-[400px] flex flex-col gap-y-8">
        <h1 className="font-bold text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Register Account
        </h1>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="username"
            id="username"
            className="h-[50px] px-3 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="email"
            id="email"
            className="h-[50px] px-3 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            className="h-[50px] px-3 rounded-md outline-none"
          />
        </div>
        <Button className="bg-gradient-to-r from-purple-400 to-pink-600 w-full h-[50px] text-white font-semibold rounded-md">
          Register
        </Button>
        <span className="text-center">
          Already have account in Furniro?{" "}
          <a
            href="/login"
            className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            Login
          </a>
        </span>
      </form>
    </div>
  );
};

export default Register;
