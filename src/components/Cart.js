import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Cart.css";
import CartItem from "./Cart-Items";
import { CartContext } from "./CartContext";

const Cart = (props) => {
  const { cart, setCart } = useContext(CartContext);
  let sub = 0.0;
  let subRounded = 0.0;
  let shipping = 0.0;
  let taxes = 0.0;
  let total = 0.0;
  let currentIndex = null;
  let nextIndex = null;
  let quantity = 1;

  let subTotal = cart.map((index) => {
    sub += index.sale;
    subRounded = sub.toFixed(2);
    calculateShipping(subRounded);
    calculateTaxes(subRounded);
    addTotal();
  });

  function calculateShipping(num) {
    if (num < 50) {
      shipping = 9.99;
    } else if (num < 100) {
      shipping = 5.99;
    } else {
      shipping = 0.0;
    }
  }

  function calculateTaxes(num) {
    let taxHold = num * 0.0425;
    taxes = taxHold.toFixed(2);
  }

  function addTotal() {
    total = Number(subRounded) + Number(taxes) + Number(total);
  }

  const sortedCart = cart.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const cartArray = sortedCart.map((index, i) => {
    return <CartItem image={index.image} name={index.name} key={`cart-${i}`} />;
  });

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div id="cartPage">
      <div id="cartHeader">
        <button className="dropbtn" id="shopBtn">
          <Link to="/shop" className="link">
            Continue Shopping
          </Link>
        </button>
      </div>
      <div id="cartMain">
        <div id="cartItems">
          <h2>Items in Cart</h2>
          <div id="cartHolder">{cartArray}</div>
        </div>
        <div id="cartTotal">
          <h2>What's the Damage?</h2>
          <div id="cartCosts">
            <h3>Subtotal: ${subRounded} </h3>
            <h3>Shipping: ${shipping}</h3>
            <h3>Tax: ${taxes}</h3>
            <h2>Total: ${total}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
