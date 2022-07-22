import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 id="companyName">DadMode.com</h1>
      <div id="header-links">
        <h3>
          <Link to="/" className="link">
            Home
          </Link>
        </h3>
        <h3>
          <Link to="/shop" className="link">
            Shop
          </Link>
        </h3>
        <h3>About</h3>
        <h3>Cart</h3>
      </div>
    </header>
  );
};

export default Header;
