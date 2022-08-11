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

  let subtotal = cart.map((index) => {
    let number = index.sale * index.quantity;
    let num = parseFloat((Math.round(number * 100) / 100).toFixed(2));

    addSubotal(num);
  });

  useEffect(() => {
    if (cart.length === 0) {
      let title = document.querySelector("#cartItemTitle");
      let emptyCart = document.querySelector("#emptyCart");
      title.textContent = "Your Cart is Empty";
      emptyCart.classList.remove("emptyCart");
    }
  });

  function addSubotal(num) {
    let newNum = Number(sub + num).toFixed(2);
    sub = Number(newNum);
    calculateTaxes(sub);
  }

  function calculateShipping(num) {
    if (num === 0) {
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

    addTotal();
  }

  function addTotal() {
    if (sub !== 0) {
      calculateShipping(sub);
    }
    total = parseFloat(Number(sub) + Number(taxes) + Number(shipping)).toFixed(
      2
    );
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
    } else {
      changeQuantity(items, cartRef, type);
    }
    if (type === "delete") {
      removeItem(cartRef);
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

  function submitOrder() {
    if (cart.length !== 0) {
      let submitBtn = document.querySelector("#submitBtn");
      let submitStatus = document.querySelector("#submitStatus");

      submitBtn.classList.add("hide");
      submitStatus.classList.remove("hide");

      setCart([]);
    }
  }

  return (
    <div id="cartPage">
      <div id="cartHeader" className="sticky">
        <Link to="/shop" className="link">
          <button className="dropbtn" id="shopBtn">
            Continue Shopping
          </button>
        </Link>
      </div>
      <div id="cartMain">
        <div id="cartItems">
          <h2 id="cartItemTitle">Items in Cart</h2>
          <p id="emptyCart" className="emptyCart">
            There are no items in your shopping cart,{" "}
            <Link to="/shop" id="emptyLink">
              continue shopping
            </Link>
          </p>
          <div id="cartHolder">{cartArray}</div>
        </div>
        <div id="cartTotal">
          <h2 id="cartTotalHeader">What's the Damage?</h2>
          <div id="cartCosts">
            <div className="totalItem">
              <h3>Order Subtotal: </h3>
              <h3>${sub} </h3>
            </div>
            <div className="totalItem">
              <h3>Shipping: </h3>
              <h3>${shipping} </h3>
            </div>
            <div className="totalItem">
              <h3>Tax: </h3>
              <h3>${taxes}</h3>
            </div>
            <div className="totalItem" id="totalCost">
              <h2>Total:</h2>
              <h2>${total}</h2>
            </div>
            <div className="cartBottomHolder">
              <button
                id="submitBtn"
                onClick={() => {
                  submitOrder();
                }}
              >
                Submit Order
              </button>
              <div id="submitStatus" className="hide">
                Your Order was Successfully Submitted. An email confirmartion
                will be sent shortly.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
