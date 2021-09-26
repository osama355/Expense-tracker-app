import React from "react";

function Balance({totalBalance}) {
  return (
    <h4 style={{ textTransform: "uppercase" }}>
      Your Balance
      <br />
      {totalBalance}
    </h4>
  );
}

export default Balance;
