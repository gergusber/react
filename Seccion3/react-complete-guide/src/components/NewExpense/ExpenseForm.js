import React, { useState } from "react";
// import PropTypes from "prop-types";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  const titleChangeHandler = (event) => {
    //Same as => document.getElementById('Titleinput').addEventListener('click',(event)=>{ something})
    // console.log(event.target.value)
    // setenteredTitle Is the function for update the state of the title.
    setenteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            onChange={dateChangeHandler}
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

// ExpenseForm.propTypes = {};

export default ExpenseForm;
