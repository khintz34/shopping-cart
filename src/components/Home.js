import React from "react";
import dad from "../images/dadMode.jpeg";
import { Link } from "react-router-dom";
import DemoCarousel from "./carousel";
import "../App.css";
import Cards from "./Cards";
import sustain from "../images/sustain.jpeg";
import growth from "../images/growth.jpeg";
import durable from "../images/durable.jpeg";
const Home = () => {
  return (
    <div id="home-page">
      <div id="home">
        <div id="home-main">
          <h1 className="main-margin">Dads.</h1>
          <h1 className="main-margin">Gear up @</h1>
          <h1 className="dadFont">DadMode.com</h1>
          <Link to="/shop" className="link">
            <button id="shop-btn">SHOP NOW!</button>
          </Link>
          <h4 className="main-margin">
            Don't worry, we know you're not made of money. Everything is on
            sale.
          </h4>
        </div>
        <img src={dad} alt="" className="dadImg" />
      </div>
      <div id="caroHolder">
        <DemoCarousel />
      </div>
      <div className="cardDiv">
        <h1 id="cardHeader">Why Shop at DadMode.com</h1>
        <div id="cardHolder" className="cardDiv">
          <Cards
            image={sustain}
            tag="Sustainably Sourced"
            para="Each one of our products is handpicked from ethical manufactuers who focus on both sustainability and quality. Whether you are buying a pair of kicks to impress your kids or a lawn mower to impress the neighbors, you never need to worry about where it came from. Enjoy with a peace of mine that comes from sustainability."
          />
          <Cards
            image={durable}
            tag="Community"
            para="At DadMode.com we pride ourselves in bringing together dads from all walks of life. Our products give a common sense of belonging for all dads to thrive in. When you see another dad rocking swag from DadMode, the only thing to say is 'Did we just become best friends??' Yes. Yes you did."
          />
          <Cards
            image={growth}
            tag="Evolutionary"
            para="We growth with you. Here at DM we evolve just like you do as a dad. One year you need The Dad 101 joke book to impress the kiddos. The next year you might be ready to do stand up comedy while rocking a pair of Rub Some Dirt On It 2.0s. Whatever the season of life you are in, we got you."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
