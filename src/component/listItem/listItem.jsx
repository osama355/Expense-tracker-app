import React from "react";
import "./listItem.css";

function ListItem({ item }) {
  const [over, setOver] = React.useState(false);

  const mouseOver = () => {
    setOver(!over);
  };

  return (
    <>
      <li
        onMouseOver={mouseOver}
        onMouseOut={mouseOver}
        style={{
          borderRight: `5px solid ${item.amount < 0 ? "red" : "green"}`,
        }}
        className="item-name"
      >
        <p>{item.itemName}</p>
        <p>{item.amount}</p>
        <div className="circle" style={{ display: over ? "flex" : "none" }}>
          <p className="cross" >X</p>
        </div>
      </li>
    </>
  );
}

export default ListItem;
