import React from "react";
import "../styles/Footer.css";
import Contact from "./Contact";
import {
  faEnvelope,
  faPhone,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FootList from "./Footer-List";

const Footer = () => {
  return (
    <footer>
      <div id="footerTopDiv">
        <Contact title="EMAIL US" msg="khintz34@gmail.com" icon={faEnvelope} />
        <Contact
          title="Look at Code"
          msg="GitHub"
          icon={faGithub}
          link="https://github.com/khintz34/shopping-cart"
        />
        <Contact title="CALL US" msg="(555)123-4567" icon={faPhone} />
        <Contact title="HELP" msg="Contact Center" icon={faQuestion} />
      </div>
      <div id="footerBottomDiv">
        <FootList
          title="ABOUT US"
          link1="History"
          link2="Careers"
          link3="Our Story"
          link4="About Page"
        />
        <FootList
          title="HELP"
          link1="Contact Us"
          link2="Find Store"
          link3="Order Status"
          link4="Dad Questions"
        />
        <FootList
          title="POLICIES"
          link1="Terms of Use"
          link2="Shipping"
          link3="Privacy"
        />
        <FootList
          title="RESOURCES"
          link1="Updates"
          link2="Become a Dad"
          link3="Sponsor a Dad"
          link4="Dad Guide"
        />
        <FootList
          title="POPULAR SEARCHES"
          link1="DadMode"
          link2="Dad Shoes"
          link3="Lawn Mower"
          link4="Grill Stuff"
          link5="Where are my kids"
        />
        <FootList title="LANGUAGE" link1="Spanish" />
      </div>
    </footer>
  );
};

export default Footer;
