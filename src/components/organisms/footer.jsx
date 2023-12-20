import { Link } from "react-router-dom";
import logo from "../../assets/logo/Meubel-House-Logos-05.png";
import Button from "../atoms/button";

const Footer = () => {
  return (
    <section className="w-full h-fit xl:h-[500px] border-t-2 px-5 md:px-16 py-10">
      <div className="w-full h-full  flex flex-col justify-between">
        <div className=" w-full h-fit xl:h-[320px] flex flex-col xl:flex-row">
          <div className="h-full w-2/5">
            <Link to={"/"}>
              <div className="flex items-center font-bold text-3xl gap-x-1 mb-8 xl:mb-16">
                <img src={logo} alt="company-logo" className=" w-10 h-7" />{" "}
                Furniro
              </div>
            </Link>
            <p>400 University Drive Suite 200 Coral</p>
            <p>Gables,</p>
            <p>FL 33134 USA</p>
          </div>
          <div className="h-full w-full xl:w-3/5 block md:flex mt-8 xl:mt-0">
            <div className="w-full md:w-1/2 h-full flex justify-start gap-x-10 md:gap-x-0 md:justify-between text-xl font-semibold">
              <ul className="flex flex-col gap-y-3 xl:gap-y-10">
                <li className="text-gray-500">Links</li>
                <Link to={"/"}>Home</Link>
                <Link to={"/shop"}>Shop</Link>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <ul className="flex flex-col gap-y-3 xl:gap-y-10">
                <li className="text-gray-500">Help</li>
                <li>Payments Option</li>
                <li>Returns</li>
                <li>Privacy and Policy</li>
              </ul>
            </div>
            <div className=" h-full w-full md:w-1/2 font-semibold flex justify-start mt-8 md:mt-0 md:justify-end">
              <div className="flex flex-col gap-y-3 xl:gap-y-10">
                <span className="text-gray-500 text-xl">Newsletter</span>
                <form className="flex gap-x-2">
                  <input
                    type="text"
                    placeholder="Enter Your Email Address"
                    className="outline-none border-b-2 border-black"
                  />
                  <Button className={"border-b-2 border-black"}>
                    SUBSCRIBE
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-[30px] mt-5 md:h-[50px] border-t-2 flex items-end text-xs md:text-base">
          <p>2023 Furniro. All right reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
