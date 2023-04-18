import React, { useState } from "react";
import "./GetExpense.css";
import axios from "axios";

const GetExpense = (props) => {
  const saveExpenseDataHandler = () => {
    axios
      .get("http://127.0.0.1:8000/movies/")
      .then((response) => {
        const expenseData = response.data;
        props.onAddExpense(expenseData);
        console.log(expenseData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let content = <button>업데이트하기</button>;

  return (
    <div className="get-expense" onClick={saveExpenseDataHandler}>
      {content}
    </div>
  );
};

export default GetExpense;
