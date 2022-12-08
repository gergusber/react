import { useReducer } from "react";


const initialInputState = {
  value: '',
  isTouched: false
}
const inputStateReducer = (state, action) => {
  if (action ==='INPUT') {
    return { value: action.value, isTouched: state.isTouched }
  }
  if (action ==='BLUR') {
    return { value: state.value, isTouched: true }
  }
  if (action ==='RESET') {
    return { value: '', isTouched: state.isTouched }
  }
  return inputStateReducer
}
const useInput = (validateValue) => {
  const [inputState, dispatcher] = useReducer(inputStateReducer, initialInputState)
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched


  const valueChangedHandler = event => dispatcher({ type: 'INPUT', value: event.target.value })

  const valueBlurHandler = (event) => dispatcher({ type: 'BLUR'  })

  const resetValue = () => dispatcher({ type: 'RESET' })

  return { 
    enteredValue:inputState.value, 
    isValid: valueIsValid, 
    hasError, 
    valueChangedHandler, 
    valueBlurHandler, 
    resetValue 
  }
}

export default useInput;