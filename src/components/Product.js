import React from "react";
import dadShoe1 from "../images/dadShoe1.jpg";

const Product = (props) => {
  console.log(props.image);
  return (
    <div className="product">
      <div id="productImageDiv">
        <img src={props.image} alt="" className="productImage" />
      </div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p style={{ textDecoration: "line-through" }}>{props.price}</p>
      <h4 style={{ color: "red" }}>{props.sale}</h4>
      <button className="product-btn">Add to Cart</button>
    </div>
  );
};

export default Product;
