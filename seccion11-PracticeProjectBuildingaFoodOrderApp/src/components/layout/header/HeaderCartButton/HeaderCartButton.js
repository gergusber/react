import CartIcon from "../../../cart/CartIcon"
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
    return <button className={classes.button}>
        <span className={classes.icon} ><CartIcon /> </span>
        <span > your cart </span>
        <span className={classes.badge} > 1 </span>
    </button>
}

export default HeaderCartButton;