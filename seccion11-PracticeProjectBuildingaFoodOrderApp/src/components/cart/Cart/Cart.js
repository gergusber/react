import classes from './Cart.module.css'
import Modal  from '../../UI/modal/Modal'

const items = [{id: 'c1', name: 'sushi', amount: 2, price: 12},
  {id: 'c2', name: 'sushi2', amount: 2, price: 12},
  {id: 'c3', name: 'sushi3', amount: 2, price: 12}]

const Cart = props => {
  const cartItems = (
    <ul className={classes.cartItems}>
      {items.map((item) => <li>{item.name}</li>)}
  </ul>)
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span> total amount: </span>
        <span> 35.60</span>
      </div>
      <div className={classes.actions} >
        <button className={classes.buttonAlt} onClick={props.onHideCart}> close</button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  )
}
export default Cart;