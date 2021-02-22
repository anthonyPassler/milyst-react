import React from "react";
import signup_img from "../../images/signup.svg";
import share_img from "../../images/share.svg";
import lists_img from "../../images/lists.svg";
import Card from "../Card/Card.js";


const CardList = () => {
  const cards = [
    {illustration: signup_img, text: "Easily sign up and create an account for free!"},
    {illustration: share_img, text: "Easily start creating organised lists and mark your items as complete with a single tap"},
    {illustration: lists_img, text: "Easily share your lists with family and friends"}
  ]
  return (
    <div>
      {
        cards.map((card, index) => {
          return <Card key={index} card={card}/>
        })
      }
    </div>
  );
}

export default CardList;
