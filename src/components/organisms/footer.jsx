import { Link } from "react-router-dom";
import logo from "../../assets/logo/Meubel-House-Logos-05.png";
import Button from "../atoms/button";

const Footer = () => {
  return (
    <section className="w-full h-[500px] border-t-2 px-16 py-10">
      <div className="w-full h-full  flex flex-col justify-between">
        <div className=" w-full h-[320px] flex">
          <div className="h-full w-2/5">
            <Link to={"/"}>
              <div className="flex items-center font-bold text-3xl gap-x-1 mb-16">
                <img src={logo} alt="company-logo" className=" w-10 h-7" />{" "}
                Furniro
              </div>
            </Link>
            <p>400 University Drive Suite 200 Coral</p>
            <p>Gables,</p>
            <p>FL 33134 USA</p>
          </div>
          <div className="h-full w-3/5 flex">
            <div className="w-1/2 h-full flex justify-between text-lg font-semibold">
              <ul className="flex flex-col gap-y-10">
                <li className="text-gray-500">Links</li>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <ul className="flex flex-col gap-y-10">
                <li className="text-gray-500">Help</li>
                <li>Payments Option</li>
                <li>Returns</li>
                <li>Privacy and Policy</li>
              </ul>
            </div>
            <div className=" h-full w-1/2 font-semibold flex justify-end">
              <div className="flex flex-col gap-y-10">
                <span className="text-gray-500 text-lg">Newsletter</span>
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
        <div className=" w-full h-[60px] border-t-2 flex items-end">
          <p>2023 Furniro. All right reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
