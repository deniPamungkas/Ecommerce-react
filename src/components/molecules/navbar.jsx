import { Link } from "react-router-dom";
import logo from "../../assets/logo/Meubel-House-Logos-05.png";
import MenuIcon from "@mui/icons-material/Menu";
import { navLinks, navMenu } from "../../constant";

const Navbar = () => {
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
      <ul className="md:flex hidden lg:w-[200px] md:w-[150px] justify-between font-semibold">
        {navMenu.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.icon} className=" w-4 h-4" />
            </li>
          );
        })}
      </ul>
      <span className="block md:hidden">
        <MenuIcon />
      </span>
    </nav>
  );
};

export default Navbar;
