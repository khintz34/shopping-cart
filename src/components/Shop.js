/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";
import Product from "./Product";
import { totalProductList } from "../data/product-list";

const Shop = (props) => {
  // State Items
  const [currentProducts, setCurrentProducts] = useState(totalProductList);
  const [productCount, setProductCount] = useState(totalProductList.length);
  const [category, setCategory] = useState("All Items");
  const { cart, setCart } = useContext(CartContext);

  let productArray = currentProducts.map((index, i) => {
    return (
      <Product
        image={index.image}
        name={index.name}
        description={index.description}
        price={index.price}
        sale={index.sale}
        key={`product-${i}`}
        addToCart={addToCart}
        quantity={index.quantity}
        increase={increaseQuantity}
        decrease={decreaseQuantity}
      />
    );
  });

  // Drop Down Events
  function showList() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  const dropDownClick = (category) => {
    setProductCount(0);

    if (category === "Low to High" || category === "High to Low") {
      sortProducts(category);
    } else {
      // eslint-disable-next-line array-callback-return
      let newArray = totalProductList.filter((index, i) => {
        if (index.category === category) {
          return index;
        }
      });
      setCurrentProducts(newArray);
      setProductCount(newArray.length);
      setCategory(category);
    }
  };

  function sortProducts(category) {
    let sortArray;
    if (category === "Low to High") {
      sortArray = totalProductList.sort((a, b) => {
        return a.sale - b.sale;
      });
    } else {
      sortArray = totalProductList.sort((a, b) => {
        return b.sale - a.sale;
      });
    }
    setCurrentProducts(sortArray);
    setProductCount(sortArray.length);
    setCategory(category);
  }

  // Adding Items to Cart State
  function addToCart(item) {
    const cartHasItem = cart.some((cartItem) => cartItem.name === item.name);

    if (cartHasItem) {
      let cartRef;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === item.name) {
          cartRef = i;
        }
      }
      let items = [...cart];
      let newItem = Object.assign({}, cart[cartRef]);
      newItem.quantity = cart[cartRef].quantity + 1;
      items.splice(cartRef, 1);
      items.push(newItem);
      setCart(items);
    } else {
      setCart((oldCart) => [...oldCart, item]);
    }
  }

  function increaseQuantity(item) {
    let cartRef;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === item.name) {
        cartRef = i;
      }
    }
    let items = [...cart];
    let newItem = Object.assign({}, cart[cartRef]);
    newItem.quantity = cart[cartRef].quantity + 1;
    items.splice(cartRef, 1);
    items.push(newItem);
    setCart(items);
  }

  function decreaseQuantity(item) {
    let cartRef;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === item.name) {
        cartRef = i;
      }
    }
    let items = [...cart];
    let newItem = Object.assign({}, cart[cartRef]);
    if (cart[cartRef.quantity === 0]) {
      return;
    }
    newItem.quantity = cart[cartRef].quantity - 1;
    items.splice(cartRef, 1);
    items.push(newItem);
    setCart(items);
  }

  return (
    <div id="shop-main">
      <div id="shop-header">
        <div>
          Showing {productCount} result(s) for {category}
        </div>
        <div className="dropdown">
          <button onClick={showList} className="dropbtn">
            Sort by: {category}
          </button>
          <div id="myDropdown" className="dropdown-content">
            <a href="#" onClick={() => dropDownClick("Accessories")}>
              Accessories
            </a>
            <a href="#" onClick={() => dropDownClick("Apparel")}>
              Apparel
            </a>
            <a href="#" onClick={() => dropDownClick("Shoes")}>
              Shoes
            </a>
            <a href="#" onClick={() => dropDownClick("Utilities")}>
              Utilities
            </a>
            <a href="#" onClick={() => dropDownClick("Low to High")}>
              Low to High
            </a>
            <a href="#" onClick={() => dropDownClick("High to Low")}>
              High to Low
            </a>
          </div>
        </div>
      </div>
      <div id="shop-homeHolder">
        <div id="shop-home">{productArray}</div>
      </div>
    </div>
  );
};

export default Shop;
