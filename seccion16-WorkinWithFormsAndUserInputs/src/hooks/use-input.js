import { useState } from "react";
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValueTouched, setEnteredValueTouched] = useState(false)

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && enteredValueTouched


  const valueChangedHandler = event => {
    setEnteredValue(event.target.value)
  }

  const valueBlurHandler = (event) => {
    setEnteredValueTouched(true)
  }

  const resetValue =()=>{
    setEnteredValue('')
  }

  return { enteredValue, isValid: valueIsValid, hasError, valueChangedHandler, valueBlurHandler, resetValue }
}

export default useInput;