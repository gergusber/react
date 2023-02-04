import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { sendCartData } from './store/slices/cart-slice'
import Notification from './components/Cart/Notification'

let isInitial = true;

function App() {
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }
    dispatch(sendCartData(cart)) //create a thunk(cart)) that calls the action that we need and the fetch
  }, [cart, dispatch])
  return (
    <>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message} />}

      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>

  );
}

export default App;
