import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Cart.css";
import CartItem from "./Cart-Items";
import { CartContext } from "./CartContext";

const Cart = (props) => {
  const { cart, setCart } = useContext(CartContext);
  let sub = 0.0;
  let shipping = 0.0;
  let taxes = 0.0;
  let total = 0.0;

  let subTotal = cart.map((index) => {
    sub += index.sale * index.quantity;
    sub = parseFloat(sub).toFixed(2);
    if (sub !== 0) {
      calculateShipping(sub);
    }
    calculateTaxes(sub);
    addTotal();
  });

  function calculateTotals() {
    let subTotal2 = cart.map((index) => {
      sub += index.sale * index.quantity;
      sub = parseFloat(sub).toFixed(2);
      if (sub !== 0) {
        calculateShipping(sub);
      }
      calculateTaxes(sub);
      addTotal();
    });
  }

  function calculateShipping(num) {
    if (num === "0.00") {
      shipping = 0.0;
    } else if (num < 75) {
      shipping = 9.99;
    } else if (num < 150) {
      shipping = 5.99;
    } else {
      shipping = 0.0;
    }

    shipping = shipping.toFixed(2);
  }

  function calculateTaxes(num) {
    let taxHold = num * 0.0425;
    taxes = taxHold.toFixed(2);
  }

  function addTotal() {
    total = Number(sub) + Number(taxes) + Number(total);
  }

  const sortedCart = cart.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const cartArray = sortedCart.map((index, i) => {
    return (
      <CartItem
        image={index.image}
        name={index.name}
        key={`cart-${i}`}
        quantity={index.quantity}
        init={initQuantity}
        index={index}
      />
    );
  });

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function removeItem(cartRef) {
    let items = [...cart];
    items.splice(cartRef, 1);
    setCart(items);
  }

  function initQuantity(item, type) {
    let cartRef;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === item.name) {
        cartRef = i;
      }
    }
    let items = [...cart];
    if (type === "remove" && cart[cartRef].quantity === 1) {
      removeItem(cartRef);
      console.log("here");
    } else {
      changeQuantity(items, cartRef, type);
    }
  }

  function changeQuantity(items, cartRef, type) {
    let num;
    if (type === "add") {
      num = 1;
    } else if (type === "remove") {
      num = -1;
    }
    let newItem = Object.assign({}, cart[cartRef]);

    newItem.quantity = cart[cartRef].quantity + num;
    items.splice(cartRef, 1);
    items.push(newItem);
    setCart(items);
  }

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
            <h3>Subtotal: ${sub} </h3>
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
