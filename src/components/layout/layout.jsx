import { Outlet } from "react-router-dom";
import Navbar from "../molecules/navbar";
import Footer from "../organisms/footer";

const Layout = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
