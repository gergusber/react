import React, { useState } from "react";
// import PropTypes from "prop-types";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    //Same as => document.getElementById('Titleinput').addEventListener('click',(event)=>{ something})
    // console.log(event.target.value)
    // setenteredTitle Is the function for update the state of the title.
    setenteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput, //take the object and then pass a new value to the entered title
    //   enteredTitle:event.target.value,
    // });

    // setUserInput((prevState) => {//Safer way
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput, //take the object and then pass a new value to the entered title
    //   enteredAmount: event.target.value,
    // });

    // setUserInput((prevState) => {//Safer way
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
    // setUserInput({
    //   ...userInput, //take the object and then pass a new value to the entered title
    //   enteredDate: event.target.value,
    // });

    // setUserInput((prevState) => {//Safer way
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); //'prevent that the page is reload
    const expenseData ={
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
      };
    console.log(expenseData);

    //override data when its 'saved' 
    setenteredAmount('');
    setenteredDate('');
    setenteredTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
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
            value={enteredDate}
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
