import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";

import { Header } from "./components/Header/Header"
import { Cart } from "./pages/Cart/Cart";
import { Home } from './pages/Home/Home'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
