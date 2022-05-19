import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";

import { Header } from "./components/Header/Header"
import { Cart } from "./pages/Cart/Cart";
import { Home } from './pages/Home/Home'
import { Register } from "./pages/Register/Register";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
