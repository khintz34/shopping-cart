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

  const dropDownClick = (category, e) => {
    setProductCount(0);

    if (category === "Low to High" || category === "High to Low") {
      sortProducts(category, e);
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

      e.preventDefault();
    }
  };

  function sortProducts(category, e) {
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

    e.preventDefault();
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

  return (
    <div id="shop-main">
      <div id="shop-header" className="sticky">
        <div>
          Showing {productCount} result(s) for {category}
        </div>
        <div className="dropdown">
          <button type="button" onClick={showList} className="dropbtn">
            Sort by: {category}
          </button>
          <div id="myDropdown" className="dropdown-content">
            <a href="#" onClick={(e) => dropDownClick("Accessories", e)}>
              Accessories
            </a>
            <a href="#" onClick={(e) => dropDownClick("Apparel", e)}>
              Apparel
            </a>
            <a href="#" onClick={(e) => dropDownClick("Shoes", e)}>
              Shoes
            </a>
            <a href="#" onClick={(e) => dropDownClick("Utilities", e)}>
              Utilities
            </a>
            <a href="#" onClick={(e) => dropDownClick("Low to High", e)}>
              Low to High
            </a>
            <a href="#" onClick={(e) => dropDownClick("High to Low", e)}>
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
