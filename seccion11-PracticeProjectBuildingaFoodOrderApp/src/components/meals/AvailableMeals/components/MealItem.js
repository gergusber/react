import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm/MealItemForm';
import CartContext from '../../../../store/cart-context';

const MealItem = (props) => {
    const price = `$${props.meal.price.toFixed(2)}`
    const cartCtx = useContext(CartContext)
    const onAddToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount : amount,
            price:props.price
        })
    }
    return (
        <li className={classes.meal} key={props.meal.id}>
            <div>
                <h3>{props.meal.name} </h3>
                <div className={classes.description}>{props.meal.description} </div>
            </div>
            <div>
                <div className={classes.price}>{price} </div>
            </div>
            <div>
                <MealItemForm onAddToCart={onAddToCartHandler}/>
            </div>
        </li>
    );
};

export default MealItem;
