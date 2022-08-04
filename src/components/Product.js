import React from "react";

const Product = (props) => {
  return (
    <div className="product">
      <div id="productImageDiv">
        <img src={props.image} alt="" className="productImage" />
      </div>
      <h3>{props.name}</h3>
      <p className="product-descr">{props.description}</p>
      <p style={{ textDecoration: "line-through" }}>ORIG: ${props.price}</p>
      <h4 style={{ color: "red" }}>SALE: ${props.sale}</h4>
      <button
        className="product-btn"
        onClick={() => {
          props.addToCart(props);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
