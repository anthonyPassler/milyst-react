import React from "react";
import "./Banner.scss"
import Cta from "../Cta/Cta.js"
import logo from "../../images/milyst-logo.png"
import phone from "../../images/iphone.png"


const Banner = () => {
  return (
    <div className="banner">
      <img className="logo" src={logo} alt="milyst logo"/>
      <h1>The <span>easiest</span> way to create and share your shopping lists.</h1>
      <Cta message="SIGN UP NOW"/>
      <div className="iphone-container">
        <img className="iphone" src={phone} alt="iphone with website displayed"/>
      </div>
    </div>
  );
}

export default Banner;
