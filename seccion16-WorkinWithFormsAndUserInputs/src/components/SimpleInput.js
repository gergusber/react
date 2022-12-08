import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const enteredNameValid = enteredName.trim() !== '' && enteredNameTouched
  const nameInputIsInvalid = !enteredNameValid && enteredNameTouched

  const nameInputChangedHandler = event => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true)
    if (!enteredNameValid) {
      return
    }

    console.log('enteredName state', enteredName)

    setEnteredName('')
    setEnteredNameTouched(false)
  }
  let formIsValid = false
  if (enteredNameValid)
    formIsValid = true



  //we assign classes for invalid css conditionally
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    < form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text'
          id='name'
          onChange={nameInputChangedHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
