import React from "react";
import './showcase.css'

function ShowCase({totalIncome,totalExpense}) {
  return (
    <div className="expense-show-case">
      <h4 className="income">
        Income <br /> ${totalIncome}
      </h4>
      <h4 className="expense">
        Expense <br />${totalExpense}
      </h4>
    </div>
  );
}

export default ShowCase;
