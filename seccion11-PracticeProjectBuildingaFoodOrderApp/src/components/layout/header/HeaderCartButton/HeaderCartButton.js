import CartIcon from "../../../cart/CartIcon"
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from 'react'
import CartContext from "../../../../store/cart-context";

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount
    }, 0)
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const { items } = cartCtx
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true)
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);

        return () =>{
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /> </span>
            <span > your cart </span>
            <span className={classes.badge}> {numberOfCartItems}</span>
        </button>)
}

export default HeaderCartButton;