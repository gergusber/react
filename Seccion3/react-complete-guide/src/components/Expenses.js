import ExpenseItem  from "./ExpenseItem";
import Card from "./card/card";
import './Expenses.css'
const Expenses = (props) => {
    return (
      <Card className='expenses'>
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
    );
}

export default Expenses
