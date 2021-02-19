import React from "react";
import "./Cta.scss"

const Cta = ({message}) => {
  let url = "#";
  return (
    <a className="cta" href={url}>{message}</a>
  )
}

export default Cta;
