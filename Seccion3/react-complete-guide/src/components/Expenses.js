import ExpenseItem from "./Expenses/ExpenseItem";
import Card from "./card/card";
import "./Expenses.css";
import ExpensesFilter from "./Filter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setfilterYear] = useState("2020");
  let expensesContent = <p> No expenses found </p>;

  const Filter = (value) => {
    setfilterYear(value);
    console.log("FilterFrom state", value);
  };

  const filterExpenses = props.expenses.filter((x) => {
    return x.date.getFullYear().toString() === filterYear;
  });
  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <div>
          <ExpensesFilter onSelectNewFilter={Filter} selected={filterYear} />
        </div>

        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
