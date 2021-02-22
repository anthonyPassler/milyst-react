import React from "react";
import "./Headline.scss"

const Headline = ({text}) => {
  return (
    <div className="how-it-works">
      <h2>{text}</h2>
    </div>
  );
}

export default Headline;
