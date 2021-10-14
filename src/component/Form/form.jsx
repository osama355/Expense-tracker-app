import React, { useRef, useState } from "react";
import "./form.css";

export default function Form({ setItems, items }) {
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");
  const itemNameRef=useRef(null)
  const itemValueRef=useRef(null)

  const inputChange1 = (e) => {
    setItemName(e.target.value);
  };

  const inputChange2 = (e) => {
    setAmount(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        itemName,
        amount: Number(amount),
      },
    ]);
    
    itemNameRef.current.value=""
    itemValueRef.current.value=""
  };

  return (
    <div className="main">
      <form action="" onSubmit={submit}>
        <label htmlFor="">Enter Description</label>
        <input
          ref={itemNameRef}
          type="text"
          className="description"
          onChange={inputChange1}
          required
        />
        <label htmlFor="" style={{ marginTop: "8px" }}>
          Enter Amount
        </label>
        <input
          ref={itemValueRef}
          type="number"
          className="description"
          onChange={inputChange2}
          required
        />
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}
