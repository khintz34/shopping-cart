import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";
import { CartContext } from "./components/CartContext";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <CartContext.Provider value={{ cart, setCart }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
