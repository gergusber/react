import useInput from '../hooks/use-input';

const SimpleInput = (props) => {


  const { enteredValue: enteredName, 
    isValid: enteredNameValid,
    hasError: nameInputHasErrors, 
    valueChangedHandler: nameInputChangedHandler, 
    valueBlurHandler: nameInputBlurHandler,
    resetValue: resetNameHandler
  } = useInput(value => value.trim() !== '')

  
  const { enteredValue: enteredEmail, 
    isValid: enteredEmailValid,
    hasError: emailInputHasErrors, 
    valueChangedHandler: emailInputChangedHandler, 
    valueBlurHandler: emailInputBlurHandler,
    resetValue: resetEmailHandler
  } = useInput(value => value.trim() !== '' && value.includes('@') )


 
  let formIsValid = false
  if (enteredNameValid && enteredEmailValid){
    formIsValid = true
  } 

  const formSubmissionHandler = event => {
    event.preventDefault();
    if (!enteredNameValid) {
      return
    }

    resetNameHandler()
    nameInputBlurHandler(false)

    resetEmailHandler()
    emailInputBlurHandler(false)
  }



  //we assign classes for invalid css conditionally
  const nameInputClasses = nameInputHasErrors ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasErrors ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text'
          id='name'
          onChange={nameInputChangedHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName} />
        {nameInputHasErrors && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email'
          id='email'
          onChange={emailInputChangedHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail} />
        {emailInputHasErrors && <p className="error-text">Email must not be empty.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
