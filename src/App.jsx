import "./App.css";
import Navbar from "./components/molecules/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Footer from "./components/organisms/footer";
import Shop from "./components/pages/shop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
