import react, { useState } from "react";

import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState("2020");

  const onSaveExpenseFilterDataHandler = (enteredSelectedYear) => {
    setSelectedYear(enteredSelectedYear);
    console.log(filteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    const date = new Date(expense.date);

    return date.getFullYear().toString() === filteredYear;
  });
  console.log("Expenses");
  console.log(filteredExpenses);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveFilterData={onSaveExpenseFilterDataHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
