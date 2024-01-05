import "./App.css";
import Navbar from "./components/molecules/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Footer from "./components/organisms/footer";
import Shop from "./components/pages/shop";
import SingleProduct from "./components/pages/singleProduct";
import Checkout from "./components/pages/checkout";
import Cart from "./components/pages/cart";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Layout from "./components/layout/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
