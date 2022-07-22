import React, { useState } from "react";
import Product from "./Product";
import dadShoe1 from "../images/dadShoe1.jpg";
import dadShoe2 from "../images/dadShoe2.jpg";
import dadShoe3 from "../images/dadShoe3.webp";
import dadShoe4 from "../images/dadShoe4.webp";
import jorts from "../images/jorts.png";

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
  ];

  const [currentProducts, setCurrentProducts] = useState(totalProducts);

  let productArray = currentProducts.map((index, i) => {
    console.log(index.image);
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

  console.log(currentProducts);
  return (
    <div id="shop-main">
      <div id="shop-header">HEADER</div>
      <div id="shop-homeHolder">
        <div id="shop-home">{productArray}</div>
      </div>
    </div>
  );
};

export default Shop;
