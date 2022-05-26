import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";

import { Header } from "./components/Header/Header";
import { Cart } from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import { Register } from "./pages/Register/Register";
import { CartProvider } from "./hooks/CartContext/useCart";
import { Finally } from "./pages/FinallyBuy/Finally";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/finally" element={<Finally />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
