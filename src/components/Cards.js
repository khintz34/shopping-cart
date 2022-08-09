import React from "react";
import "../styles/Cards.css";

const Cards = (props) => {
  return (
    <div className="cardMain">
      <div>
        <img src={props.image} alt={props.tag} className="cardImage" />
      </div>
      <h2>{props.tag}</h2>
      <p className="cardPara">{props.para}</p>
    </div>
  );
};

export default Cards;
