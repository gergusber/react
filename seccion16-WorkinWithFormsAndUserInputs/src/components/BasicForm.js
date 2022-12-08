import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const { enteredValue: enteredName,
    isValid: enteredNameValid,
    hasError: nameInputHasErrors,
    valueChangedHandler: nameInputChangedHandler,
    valueBlurHandler: nameInputBlurHandler,
    resetValue: resetNameHandler
  } = useInput(value => value.trim() !== '')

  const { enteredValue: enteredLastName,
    isValid: enteredLastNameValid,
    hasError: lastNameInputHasErrors,
    valueChangedHandler: lastNameInputChangedHandler,
    valueBlurHandler: lastNameInputBlurHandler,
    resetValue: resetLastNameHandler
  } = useInput(value => value.trim() !== '')

  const { enteredValue: enteredEmail,
    isValid: enteredEmailValid,
    hasError: emailInputHasErrors,
    valueChangedHandler: emailInputChangedHandler,
    valueBlurHandler: emailInputBlurHandler,
    resetValue: resetEmailHandler
  } = useInput(value => value.trim() !== '' && value.includes('@'))

  const nameInputClasses = nameInputHasErrors ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputHasErrors ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasErrors ? 'form-control invalid' : 'form-control';


  let formIsValid = false
  if (enteredNameValid && enteredLastNameValid && enteredEmailValid) {
    formIsValid = true
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    if (!enteredNameValid) {
      return
    }

    console.log(enteredName,enteredLastName,enteredEmail)
    resetNameHandler()
    nameInputBlurHandler(false)
    resetLastNameHandler()
    lastNameInputBlurHandler(false)
    resetEmailHandler()
    emailInputBlurHandler(false)
  }


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
            onChange={nameInputChangedHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName} />
          {nameInputHasErrors && <p className="error-text">Name must not be empty.</p>}

        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
            onChange={lastNameInputChangedHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName} />
          {lastNameInputHasErrors && <p className="error-text">Last Name must not be empty.</p>}

        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email'
          id='email'
          onChange={emailInputChangedHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail} />
        {emailInputHasErrors && <p className="error-text">Email must not be empty.</p>}

      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
