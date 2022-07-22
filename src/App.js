import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
// import RouteSwitch from "./RouteSwitch";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
