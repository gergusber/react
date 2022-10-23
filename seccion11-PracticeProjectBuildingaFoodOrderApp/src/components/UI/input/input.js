import classes from './input.module.css';

const Input = (props) => {
  return <div className={classes.input}>
    <label htmlFor={props.input.id} >{props.inputLabel}</label>
    <input {...props.input} /> 
  </div>;
};

export default Input;
