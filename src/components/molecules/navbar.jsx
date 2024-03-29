import { Link } from "react-router-dom";
import logo from "../../assets/logo/Meubel-House-Logos-05.png";
import { navLinks } from "../../constant";
import { useContext, useState } from "react";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  // handle aktif/nonAktif sideMenu
  const [side, setSide] = useState(false);
  // const handleSide = () => {
  //   setSide((cur) => !cur);
  // };
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
  //handle jumlah item di cart
  const cartSum = useSelector((state) => {
    return state.cart.data;
  });

  const user = JSON.parse(window.sessionStorage.getItem("userData"));

  const { logout } = useContext(AuthContext);
  return (
    <nav className="bg-white flex h-[70px] items-center justify-between px-3 md:px-10 z-10">
      <Link to={"/"}>
        <div className="flex items-center font-bold text-xl md:text-3xl gap-x-1">
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
        {user ? (
          <li onClick={logout} className="cursor-pointer">
            Logout
          </li>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}

        <li>
          <img src={`/icons/search.png`} className=" w-4 h-4" />
        </li>
        {user ? (
          <li>
            <img src={`/images/avatar.png`} className=" w-6 h-6" />
          </li>
        ) : (
          <li>
            <img src={`/images/userImg.png`} className=" w-6 h-6" />
          </li>
        )}
        <Link to={"/cart"}>
          <Badge badgeContent={cartSum?.length} color="success" size="small">
            <img src={`/icons/cart.png`} className=" w-4 h-4" />
          </Badge>
        </Link>
      </ul>
      <ul className="flex md:hidden gap-x-4 px-2">
        {user ? (
          <li onClick={logout} className="cursor-pointer text-sm">
            Logout
          </li>
        ) : (
          <Link to={"/login"} className="text-sm">
            Login
          </Link>
        )}
        {user ? (
          <li>
            <img src={`/images/avatar.png`} className=" w-6 h-6" />
          </li>
        ) : (
          <li>
            <img src={`/images/userImg.png`} className=" w-6 h-6" />
          </li>
        )}
        <Link to={"/cart"}>
          <Badge badgeContent={cartSum?.length} color="success" size="small">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </Link>
      </ul>
      {/* <span className="block md:hidden" onClick={handleSide}>
        <MenuIcon />
      </span>
      <div
        className={`md:hidden absolute top-0 right-0 bottom-0 left-10 bg-white z-50 ${
          side ? "" : "hidden"
        }`}
      >
        <div
          className="w-20 h-20 bg-teal-300 flex justify-center items-center text-3xl"
          onClick={handleSide}
        >
          x
        </div> */}
      {/* <ul className=" w-full h-[350px] mt-24 flex flex-col gap-y-5 px-3">
          {navLinks.map((item) => {
            return (
              <Link to={item.dest} key={item.id}>
                <li
                  className="flex-1 gap-x-2 h-20 bg-orange-300 px-3 rounded-lg flex items-center justify-start text-xl font-semibold z-50"
                  onClick={handleSide}
                >
                  {item.title == "Home" && <HomeOutlinedIcon />}
                  {item.title == "Shop" && <ShoppingBagOutlinedIcon />}
                  {item.title == "About" && <InfoOutlinedIcon />}
                  {item.title == "Connect" && <EmailOutlinedIcon />}
                  {item.title}
                </li>
              </Link>
            );
          })}
          <Link to={"/cart"}>
            <li
              className="flex-1 gap-x-2 h-20 bg-orange-300 px-3 rounded-lg flex items-center justify-start text-xl font-semibold z-50"
              onClick={handleSide}
            >
              <Badge
                badgeContent={cartSum?.length}
                color="success"
                size="small"
              >
                <ShoppingCartOutlinedIcon />
              </Badge>
              Cart
            </li>
          </Link>
        </ul> */}
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
