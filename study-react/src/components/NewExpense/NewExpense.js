import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [idEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEventHandler = () => {
    setIsEditing(false);
  };

  let content = <button onClick={startEditingHandler}>Add New Expense</button>;

  if (idEditing) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelEvent={cancelEventHandler}
      />
    );
  } else {
    content = <button onClick={startEditingHandler}>Add New Expense</button>;
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
