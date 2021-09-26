import React from "react";
import './form.css'

export default function Form({submit,inputChange1, inputChange2}) {
  return (
    <div className='main'>
      <form action="" onSubmit={submit}>
        <label htmlFor="">Enter Description</label>
        <input
          type="text"
          className="description"
          onChange={inputChange1}
          required
        />
        <label htmlFor="" style={{ marginTop: "8px" }}>
          Enter Amount
        </label>
        <input
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
