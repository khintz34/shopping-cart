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
        <button
          onClick={() => {
            props.init(props.index, "remove");
          }}
        >
          -
        </button>
        <p>{props.quantity}</p>
        <button
          onClick={() => {
            props.init(props.index, "add");
          }}
        >
          +
        </button>
      </div>
      <button
        id="removeItem"
        onClick={() => {
          props.init(props.index, "delete");
        }}
      >
        Remove Item
      </button>
    </div>
  );
};

export default CartItem;
