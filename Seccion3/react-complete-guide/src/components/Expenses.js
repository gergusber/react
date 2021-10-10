import ExpenseItem from "./Expenses/ExpenseItem";
import Card from "./card/card";
import "./Expenses.css";
import ExpensesFilter from "./Filter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setfilterYear] = useState("2020");

  const Filter = (value) => {
    setfilterYear(value);
    console.log("FilterFrom state", value);
  };

  return (
    <div>
      <Card className="expenses">
        <div>
          <ExpensesFilter onSelectNewFilter={Filter} selected={filterYear} />
        </div>
        {props.expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
