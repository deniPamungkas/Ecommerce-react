import "./App.css";
import Navbar from "./components/molecules/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
