import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Carousel.css";
import { Carousel } from "react-responsive-carousel";
import dadShoe1 from "../images/dadShoe1.jpg";
import dadShoe2 from "../images/dadShoe2.jpg";
import dadShoe4 from "../images/dadShoe4.webp";
import { Link } from "react-router-dom";

const DemoCarousel = () => {
  return (
    <div id="caro-page">
      <h1 id="caroHeader">Dad Shoes for Days</h1>
      <Carousel id="carouselComp">
        <div className="mainImgDiv">
          <img src={dadShoe1} alt="Legend 1" className="caroImg" />
          <Link to="/shop" className="link">
            <p className="legend">The Dad 101</p>
          </Link>
        </div>
        <div className="mainImgDiv">
          <img src={dadShoe2} alt="Legend 2" className="caroImg" />
          <Link to="/shop" className="link">
            <p className="legend">The 'Back in My Day'</p>
          </Link>
        </div>
        <div className="mainImgDiv">
          <img src={dadShoe4} alt="Legend 3" className="caroImg" />
          <Link to="/shop" className="link">
            <p className="legend">The 'Rub Some Dirt on It' 2.0</p>
          </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
