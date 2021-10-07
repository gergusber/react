import './ExpenseItem.css'
import Card from '../card/card'
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
  const clickHandler =()=>{
    console.log("Clicked")
    }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={()=>{console.log('On Click')}}>Change</button> */}
      <button onClick={clickHandler}>Change</button>
      {/* <button onClick={()=>{ clickHandler()}}>Change</button> */}
    </Card>
  );
};


export default ExpenseItem;
