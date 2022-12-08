import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const nameInputRef = useRef();
  const [enteredNameValid, setEnteredNameValid] = useState(true)

  const nameInputChangedHandler = event => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
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
  const nameInputClasses = enteredNameValid ? 'form-control' : 'form-control invalid';

  return (
    < form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text'
          id='name'
          ref={nameInputRef}
          onChange={nameInputChangedHandler}
          value={enteredName} />
        {!enteredNameValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
