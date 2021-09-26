import React from "react";
import './list.css'

function List({items}) {
  return (
    <ul>
      {items.map((item, i) => {
        return (
          <li
            style={{
              borderRight: `5px solid ${item.amount < 0 ? "red" : "green"}`,
            }}
            key={i}
            className="item-name"
          >
            <p>{item.itemName}</p>
            <p>{item.amount}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
