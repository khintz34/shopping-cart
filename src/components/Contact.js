import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = (props) => {
  function goToWebsite() {
    if (props.link !== undefined) {
      window.open("https://github.com/khintz34/shopping-cart");
    }
  }

  return (
    <div className="contactCard">
      <div
        className="iconDiv"
        onClick={() => {
          goToWebsite();
        }}
      >
        <FontAwesomeIcon icon={props.icon} className="icons" />
      </div>
      <div className="infoDiv">
        <h3 className="contactTitle">{props.title}</h3>
        <p>{props.msg}</p>
      </div>
    </div>
  );
};

export default Contact;
