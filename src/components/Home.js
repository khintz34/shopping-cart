import React from "react";
import dad from "../images/dadMode.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <div id="home-main">
        <h2 className="main-margin">
          Dads. Soon-to-be-Dads. Wanna-be-Dads. Frat Dads. Cool Dads. Dorky
          Dads.
        </h2>
        <h2 className="main-margin">No Matter What Kind of Dad You Are</h2>
        <h2 className="main-margin">Gear up by shopping</h2>
        <h1 className="dadFont">DadMode.com</h1>
        <Link to="/shop" className="link">
          <button id="shop-btn">SHOP NOW!</button>
        </Link>
        <h4 className="main-margin">
          Don't worry, we know you're not made of money. Everything is on sale.
        </h4>
      </div>
      <img src={dad} alt="" className="dadImg" />
    </div>
  );
};

export default Home;
