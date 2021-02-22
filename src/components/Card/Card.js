import React from "react";
import "./Card.scss";

const Card = ({card}) => {
  return (
    <div className="steps">
      <img src={card.illustration} alt="illustration"/>
      <h3>{card.text}</h3>
    </div>
  );
}

export default Card;
