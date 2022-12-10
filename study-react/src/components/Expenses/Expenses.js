import react, { useState } from "react";

import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState("2020");

  const onSaveExpenseFilterDataHandler = (enteredSelectedYear) => {
    setSelectedYear(enteredSelectedYear);
    console.log(filteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveFilterData={onSaveExpenseFilterDataHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
