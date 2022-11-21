import classes from './input.module.css';
import React,{useRef} from 'react'

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id} >{props.inputLabel}</label>
      <input ref={ref} {...props.input} />
    </div>
  )
});

export default Input;
