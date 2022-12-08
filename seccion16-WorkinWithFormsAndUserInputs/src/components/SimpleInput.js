import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const nameInputRef = useRef()
  const nameInputChangedHandler = event => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    console.log('enteredName state',enteredName)
    console.log('nameInputRef',nameInputRef.current.value)
    
    setEnteredName('')
  }

  return (
    < form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} onChange={nameInputChangedHandler} value={enteredName} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
