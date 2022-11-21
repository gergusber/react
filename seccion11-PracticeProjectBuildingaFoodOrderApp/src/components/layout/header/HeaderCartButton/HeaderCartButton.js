import CartIcon from "../../../cart/CartIcon"
import classes from "./HeaderCartButton.module.css";
import { useContext } from 'react'
import CartContext from "../../../../store/cart-context";

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount
    }, 0)
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /> </span>
            <span > your cart </span>
            <span className={classes.badge}> {numberOfCartItems}</span>
        </button>)
}

export default HeaderCartButton;