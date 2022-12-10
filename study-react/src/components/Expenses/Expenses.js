import react, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState("2020");
  const onSaveExpenseFilterDataHandler = (enteredSelectedYear) => {
    setSelectedYear(enteredSelectedYear);
    console.log(filteredYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveFilterData={onSaveExpenseFilterDataHandler}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
