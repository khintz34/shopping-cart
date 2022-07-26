import React from "react";
import "../styles/about.css";
import dork from "../images/dork.jpeg";
import coolDad from "../images/coolDad.jpeg";
import grillDad from "../images/grillDad.jpeg";
import lazyDad from "../images/lazyDad.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="aboutPage">
      <div id="aboutMain">
        <div id="aboutStory" className="aboutMain">
          <h1 className="aboutHeader">Our Story</h1>
          <div className="sideBy">
            <h3 className="aboutInfo">
              DadMode.com was founded to give dads everywhere a
              <span className="italics"> hope </span>
              and a <span className="italics"> future</span>. To pave the way
              for new dad's to embarrass their kids. For old dads to continue to
              embarrass their kids. And for the wanna be dad to shop from a
              proven dad-friendly, dad-approved store.
              <br></br>
              <br></br>
              DadMode.com was inspired by our forefathers who braved the treched
              waters with knee high socks, fanny packs, argyle sweaters, and
              even{" "}
              <Link to="/shop" id="link-about">
                White New Balance Kicks
              </Link>{" "}
              without a shred of knowledge that they would be blazing the trail
              for so many to come.
              <br></br>
              <br></br>
              Never leave the house again without a face plam from your oldest,
              an eye roll from your youngest, and a spank from your wife.
              <br></br>
              <br></br>
              <Link to="/shop" id="link-about">
                <h2>DadMode.com</h2>
              </Link>{" "}
            </h3>
            <div className="aboutImageDiv">
              <img src={dork} alt="" className="aboutImage" />
            </div>
          </div>
        </div>
        <div id="aboutTeam" className="aboutMain">
          <h1 className="aboutHeader">Our Team</h1>
          <div className="teamMain">
            <div className="teamItem">
              <h2>Cool Dad</h2>
              <h3>Founder and CEO</h3>
              <div className="teamImg">
                <img src={coolDad} alt="Cool Dad" />
              </div>
            </div>
            <div className="teamItem">
              <h2>Grill Dad</h2>
              <h3>Chief Grill Officer</h3>
              <div className="teamImg">
                <img src={grillDad} alt="Grill Dad" />
              </div>
            </div>
            <div className="teamItem">
              <h2>Lazy Dad</h2>
              <h3>Head of Resting his Eyes</h3>
              <div className="teamImg">
                <img src={lazyDad} alt="Lazy Dad" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
