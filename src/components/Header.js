import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 id="companyName">
        <Link to="/" className="link">
          DadMode.com
        </Link>
      </h1>
      <div id="header-links">
        <h3 className="link-header">
          <Link to="/" className="link">
            Home
          </Link>
        </h3>
        <h3 className="link-header">
          <Link to="/shop" className="link">
            Shop
          </Link>
        </h3>
        <h3 className="link-header">
          <Link to="/about" className="link">
            About
          </Link>
        </h3>
        <h3 className="link-header">
          <Link to="/cart" className="link">
            Cart
          </Link>
        </h3>
      </div>
    </header>
  );
};

export default Header;
