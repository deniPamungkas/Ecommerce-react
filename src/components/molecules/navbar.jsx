import { Link } from "react-router-dom";
import logo from "../../assets/logo/Meubel-House-Logos-05.png";
import MenuIcon from "@mui/icons-material/Menu";
import { navLinks, navMenu } from "../../constant";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const Navbar = () => {
  // handle aktif/nonAktif sideMenu
  const [side, setSide] = useState(false);
  const handleSide = () => {
    setSide((cur) => !cur);
  };
  // handle scroll off ketika sideMenu aktif
  const scroll = () => {
    if (side) return (document.body.style.overflow = "hidden");
    else document.body.style.overflow = "auto";
  };
  scroll();
  //handle nonAktif sideMenu ketika ukuran layar berubah
  window.addEventListener("resize", function () {
    setSide(false);
  });

  const cartSum = useSelector((state) => {
    return state.cart.data;
  });

  return (
    <nav className="bg-white flex h-[70px] items-center justify-between px-3 md:px-10 z-10">
      <Link to={"/"}>
        <div className="flex items-center font-bold text-3xl gap-x-1">
          <img src={logo} alt="company-logo" className=" w-10 h-7" /> Furniro
        </div>
      </Link>
      <ul className="sm:flex hidden sm:w-[200px] lg:w-[400px] md:w-[250px] justify-around font-semibold">
        {navLinks.map((item) => {
          return (
            <Link to={item.dest} key={item.id}>
              {item.title}
            </Link>
          );
        })}
      </ul>
      <ul className="md:flex hidden lg:w-[200px] md:w-[150px] justify-between items-center font-semibold">
        <li>
          <img src={`/icons/user.png`} className=" w-4 h-4" />
        </li>
        <li>
          <img src={`/icons/search.png`} className=" w-4 h-4" />
        </li>
        <li>
          <img src={`/icons/wishlist.png`} className=" w-4 h-4" />
        </li>
        <Link to={"/cart"}>
          <Badge badgeContent={cartSum?.length} color="success" size="small">
            <img src={`/icons/cart.png`} className=" w-4 h-4" />
          </Badge>
        </Link>
      </ul>
      <span className="block md:hidden" onClick={handleSide}>
        <MenuIcon />
      </span>
      <div
        className={`md:hidden absolute top-0 right-0 bottom-0 left-10 bg-white z-20 ${
          side ? "" : "hidden"
        }`}
      >
        <div
          className="w-20 h-20 bg-teal-300 flex justify-center items-center text-3xl"
          onClick={handleSide}
        >
          x
        </div>
        <ul className=" w-full h-[350px] mt-24 flex flex-col gap-y-5 px-3">
          {navLinks.map((item) => {
            return (
              <Link to={item.dest} key={item.id}>
                <li className="flex-1 h-20 bg-orange-300 px-3 rounded-lg flex items-center justify-start text-xl font-semibold">
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
