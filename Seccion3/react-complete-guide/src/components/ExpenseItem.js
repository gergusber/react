import './ExpenseItem.css'
const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>Date</div>
      <div className="expense-item__description">
        <h2> Car Insurance</h2>
        <div className="expense-item__price">1231</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
