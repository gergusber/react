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

  const filterExpenses = props.expenses.filter((x) => {
    return x.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <div>
          <ExpensesFilter onSelectNewFilter={Filter} selected={filterYear} />
        </div>
        {filterExpenses.length === 0 ? (
          <p> No expenses found </p>
        ) : (
          filterExpenses.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;
