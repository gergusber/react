import Card from "./card/card";
import "./Expenses.css";
import ExpensesFilter from "./Filter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList/ExpensesList";

const Expenses = (props) => {
  const [filterYear, setfilterYear] = useState("2020");

  const Filter = (value) => {
    setfilterYear(value);
    console.log("FilterFrom state", value);
  };

  const filterExpenses = props.expenses.filter((x) => {
    return x.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
      <Card className="expenses">
        <div>
          <ExpensesFilter onSelectNewFilter={Filter} selected={filterYear} />
        </div>
        <ExpensesList items={filterExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
