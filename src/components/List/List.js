import React from "react";
import "./List.scss"

const List = ({ list }) => {
  return (
    <div className="list">
      <h3>{list.name}</h3>
      <a href="#">[D]</a>
      <a href="#">[E]</a>
    </div>
  );
}

export default List;
