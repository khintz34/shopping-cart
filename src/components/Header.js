import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "./CartContext";

const Header = () => {
  const { cart, setCart } = useContext(CartContext);
  function getCartLength() {
    let cartNumber = document.querySelector("#cartNumber");
    let num = Number("0");
    if (cart.length <= 0) {
      cartNumber.classList.add("hidden");
    } else {
      cart.map((index) => {
        let anotherNum = Number(index.quantity);
        num = Number(num) + anotherNum;
      });
      cartNumber.classList.remove("hidden");
      cartNumber.textContent = num;
    }
  }

  useEffect(() => {
    getCartLength();
  }, [cart]);

  return (
    <header id="homeHeader" className="sticky">
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
        <Link to="/cart" className="link actualCart">
          <div id="cartContainer">
            <h3 className="link-header">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="actualCart"
                id="cartIcon"
              ></FontAwesomeIcon>
            </h3>
            <div id="cartNumber"></div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
