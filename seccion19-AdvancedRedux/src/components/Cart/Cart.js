import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(x =>
          <CartItem
            key={x.id}
            item={{
              id: x.id,
              title: x.title,
              quantity: x.quantity,
              total: x.totalPrice,
              price: x.price
            }}
          />)}
      </ul>
    </Card>
  );
};

export default Cart;
