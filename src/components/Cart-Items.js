import React from "react";
import "../styles/Cart.css";

const CartItem = (props) => {
  return (
    <div className="cartProduct">
      <div id="CartImageDiv">
        <img src={props.image} alt="" className="cartProductImage" />
      </div>
      <h3>{props.name}</h3>
      <div id="cartQuantity">
        <button>-</button>
        <p>Number</p>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
