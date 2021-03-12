import React, { useState } from "react";

import Footer from "../Footer/Footer.js"
import List from "../List/List.js"

const Lists = () => {
  const fakeListData = [
    {name: "Saturday Shopping", complete: true},
    {name: "Sunday things todo", complete: false},
    {name: "Laundry", complete: false}
  ];

  const [lists, setLists] = useState(fakeListData);

  const listItems = lists.map( (list, index) => {
    return (<List key={index} list={list} />)
  }
  );

  return (
    <div>
      {listItems}
      <Footer />
    </div>
  );
}

export default Lists;
