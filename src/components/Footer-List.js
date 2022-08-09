import React from "react";

const FootList = (props) => {
  return (
    <div id="footList">
      <h4>{props.title}</h4>
      <p className="links">{props.link1}</p>
      <p className="links">{props.link2}</p>
      <p className="links">{props.link3}</p>
      <p className="links">{props.link4}</p>
      <p className="links">{props.link5}</p>
    </div>
  );
};

export default FootList;
