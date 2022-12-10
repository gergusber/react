import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true
  })
  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalInputRef = useRef()
  const cityInputRef = useRef()

  const isEmpty = value => value.trim() === ''
  const isFiveChars = value => value.trim().length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = isEmpty(enteredStreet)
    const enteredCityIsValid = isEmpty(enteredCity);
    const enterePostalIsValid = isFiveChars(enteredPostal);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enterePostalIsValid,
    })


    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enterePostalIsValid;



    if (!formIsValid) {
      // no submit
      return;
    }

    props.onSubmit({
      name : enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal
    })
  };

  const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : 'invalid'}`
  const streetControlClasses = `${classes.control} ${formInputValidity.street ? '' : 'invalid'}`
  const postalControlClasses = `${classes.control} ${formInputValidity.postal ? '' : 'invalid'}`
  const cityControlClasses = `${classes.control} ${formInputValidity.city ? '' : 'invalid'}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputValidity.name && <p>PLease enter a valid name </p>}
      </div>

      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputValidity.street && <p>PLease enter a valid street </p>}
      </div>

      <div className={postalControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef} />
        {!formInputValidity.postal && <p>PLease enter a valid postal, 5 char long </p>}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputValidity.city && <p>PLease enter a valid city </p>}
      </div>

      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;