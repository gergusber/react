import classes from './Cart.module.css'
import Modal from '../../UI/modal/Modal'
import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import CartItem from './components/CartItem'



const Cart = props => {

  const cartCtx = useContext(CartContext)

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
  }
  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 })
  }
  const cartItems = (
    <ul className={classes.cartItems}>
      {cartCtx.items.map((item) =>
        <CartItem key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />)}
    </ul>)

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span> total amount: </span>
        <span> {cartCtx.totalAmount} </span>
      </div>
      <div className={classes.actions} >
        <button className={classes.buttonAlt} onClick={props.onHideCart}> close</button>
        {hasItems && <button className={classes.button}>order</button>}
      </div>
    </Modal>
  )
}
export default Cart;