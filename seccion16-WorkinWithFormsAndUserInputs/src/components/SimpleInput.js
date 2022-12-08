import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState('');

  const enteredNameValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameValid && enteredNameTouched

  const enteredEmailValid = enteredEmail.trim() !== '' && enteredEmail.includes('@')  
  const emailInputIsInvalid = !enteredEmailValid && enteredEmailTouched
 
  let formIsValid = false
  if (enteredNameValid && enteredEmailValid){
    formIsValid = true
  }


  const nameInputChangedHandler = event => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
  }

  const emailInputChangedHandler = event => {
    setEnteredEmail(event.target.value)
  }

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true)
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true)
    if (!enteredNameValid) {
      return
    }

    setEnteredName('')
    setEnteredNameTouched(false)

    setEnteredEmail('')
    setEnteredEmailTouched(false)
  }



  //we assign classes for invalid css conditionally
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text'
          id='name'
          onChange={nameInputChangedHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email'
          id='email'
          onChange={emailInputChangedHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail} />
        {emailInputIsInvalid && <p className="error-text">Email must not be empty.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
