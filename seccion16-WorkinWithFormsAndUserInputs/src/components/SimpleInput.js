import { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const nameInputRef = useRef();
  const [enteredNameValid, setEnteredNameValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const nameInputChangedHandler = event => {
    setEnteredName(event.target.value)
  }

  useEffect(() => {
    if (enteredNameValid)
      console.log('name input is valid')
  }, [enteredNameValid])

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true)
    if (enteredName.trim() === '') {
      setEnteredNameValid(false)
      return
    }
    setEnteredNameValid(true)

    console.log('enteredName state', enteredName)
    console.log('nameInputRef', nameInputRef.current.value)

    setEnteredName('')
  }
  //we assign classes for invalid css conditionally

  const nameInputIsInvalid = !enteredNameValid && enteredNameTouched

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    < form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text'
          id='name'
          ref={nameInputRef}
          onChange={nameInputChangedHandler}
          value={enteredName} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
