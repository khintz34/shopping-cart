/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Product from "./Product";
import dadShoe1 from "../images/dadShoe1.jpg";
import dadShoe2 from "../images/dadShoe2.jpg";
import dadShoe3 from "../images/dadShoe3.webp";
import dadShoe4 from "../images/dadShoe4.webp";
import jorts from "../images/jorts.png";
import fannyPack from "../images/fanny.jpg";
import socks from "../images/socks.webp";
import apron from "../images/apron.webp";
import grill from "../images/grill.webp";
import wrist from "../images/wrist.webp";
import snow from "../images/snow.webp";
import beer from "../images/beer.webp";
import jokes from "../images/jokes.webp";
import zipp from "../images/zipp.webp";

const Shop = (props) => {
  const totalProducts = [
    {
      name: "The Dad 101",
      description: "Unsure where to start? Start here!",
      price: 74.99,
      sale: 54.97,
      image: dadShoe1,
      category: "shoes",
    },
    {
      name: "The 'Back in My Day'",
      description: "Want to relive your glory days??",
      price: 65.99,
      sale: 44.48,
      image: dadShoe2,
      category: "shoes",
    },
    {
      name: "The 'Go Ask Your Mother'",
      description: "Tired of annoying questions?",
      price: 69.99,
      sale: 67.26,
      image: dadShoe3,
      category: "shoes",
    },
    {
      name: "The 'Rub Some Dirt On It' 2.0",
      description: "Pairs perfect with jorts!",
      price: 70.99,
      sale: 64.4,
      image: dadShoe4,
      category: "shoes",
    },
    {
      name: "The 'Its Going to Come Back in Style'",
      description: "Any Occasion. Any Place.",
      price: 37.0,
      sale: 29.97,
      image: jorts,
      category: "apparel",
    },
    {
      name: "The 'Knew it Would Come Back'",
      description: "No more stuffing your pockets with your kids nik nacs",
      price: 29.99,
      sale: 19.99,
      image: fannyPack,
      category: "accessory",
    },
    {
      name: "The 'Hit me Tube Sock'",
      description: "Dont want to get sunburned above the ankle!",
      price: 20.99,
      sale: 19.9,
      image: socks,
      category: "apparel",
    },
    {
      name: "The 'Medium Rare'",
      description: "You'll get pink and you'll like it",
      price: 25.5,
      sale: 19.99,
      image: apron,
      category: "apparel",
    },
    {
      name: "The 'Dad of All Trades'",
      description: "Flip, Skewer, Smoke.",
      price: 39.99,
      sale: 29.99,
      image: grill,
      category: "accessory",
    },
    {
      name: "The 'Gadget Dad'",
      description: "Never lose a bit again",
      price: 29.99,
      sale: 19.99,
      image: wrist,
      category: "accessory",
    },
    {
      name: "The 'How Much Horsepower'",
      description: "No more throwing your back out",
      price: 200,
      sale: 149.99,
      image: snow,
      category: "utility",
    },
    {
      name: "The 'Not Now Honey'",
      description: "I'm watching the game!",
      price: 30.49,
      sale: 25.99,
      image: beer,
      category: "accessory",
    },
    {
      name: "The 'Starter Guide'",
      description: "Every dad should know these",
      price: 10.59,
      sale: 6.99,
      image: jokes,
      category: "accessory",
    },
    {
      name: "The 'Versatile'",
      description: "The 'One Pant to Rule Them All'",
      price: 40.0,
      sale: 35.99,
      image: zipp,
      category: "apparel",
    },
  ];

  const [currentProducts, setCurrentProducts] = useState(totalProducts);
  const [productCount, setProductCount] = useState(totalProducts.length);

  let productArray = currentProducts.map((index, i) => {
    return (
      <Product
        image={index.image}
        name={index.name}
        description={index.description}
        price={`ORIG: $${index.price}`}
        sale={`SALE: $${index.sale}`}
        key={`product-${i}`}
      />
    );
  });

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

    if (category === "low to high" || category === "high to low") {
      setCurrentProducts(totalProducts);
      setProductCount(totalProducts.length);
    } else {
      let newArray = totalProducts.filter((index, i) => {
        if (index.category === category) {
          return index;
        }
      });
      setCurrentProducts(newArray);
      setProductCount(newArray.length);
    }
  };

  return (
    <div id="shop-main">
      <div id="shop-header">
        <div>Showing {productCount} result(s) for "search"</div>
        <div className="dropdown">
          <button onClick={showList} className="dropbtn">
            Sort by:
          </button>
          <div id="myDropdown" className="dropdown-content">
            <a href="#" onClick={() => dropDownClick("accessory")}>
              Accessory
            </a>
            <a href="#" onClick={() => dropDownClick("apparel")}>
              Apparel
            </a>
            <a href="#" onClick={() => dropDownClick("shoes")}>
              Shoes
            </a>
            <a href="#" onClick={() => dropDownClick("utility")}>
              Utility
            </a>
            <a href="#" onClick={() => dropDownClick("low to high")}>
              Low to High
            </a>
            <a href="#" onClick={() => dropDownClick("high to low")}>
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
