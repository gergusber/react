import ExpenseItem from "./Expenses/ExpenseItem";
import Card from "./card/card";
import "./Expenses.css";
import ExpensesFilter from "./Filter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setfilterYear] = useState("2020");

  const Filter = (value) => {
    console.log("Filter", value);
    setfilterYear(value);
    console.log("FilterFrom state", filterYear);
  };

  return (
    <div>
      <Card className="expenses">
        <div>
          <ExpensesFilter onSelectNewFilter={Filter} selected={filterYear} />
        </div>
        {/* {props.expenses.map((n) => {
        return (
          <ExpenseItem
            id={n.id}
            title={n.title}
            amount={n.amount}
            date={n.date}
          />
        );
      })} */}

        <ExpenseItem
          id={props.expenses[0].id}
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          id={props.expenses[1].id}
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
