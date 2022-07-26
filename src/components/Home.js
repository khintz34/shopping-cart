import React from "react";
import dad from "../images/dadMode.jpeg";

const Home = () => {
  return (
    <div id="home">
      <div>
        <h3 className="main-margin">
          Dads. Soon-to-be-Dads. Wanna-be-Dads. Frat Dads. Cool Dads. Dorky
          Dads.
        </h3>
        <h2 className="main-margin">No Matter What Kind of Dad You Are</h2>
        <h2 className="main-margin">Gear up by shopping</h2>
        <h1 className="dadFont">DadMode.com</h1>
        <button id="shop-btn">SHOP NOW!</button>
        <h4 className="main-margin">
          Don't worry, we know you're not made of money. Everything is on sale.
        </h4>
      </div>
      <img src={dad} alt="" className="dadImg" />
    </div>
  );
};

export default Home;