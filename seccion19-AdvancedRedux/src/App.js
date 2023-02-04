import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { uiActions } from './store/slices/ui-slice'
import Notification from './components/Cart/Notification'

let isInitial = true;

function App() {
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNOtification({
        status: 'pending',
        title: 'sending...',
        message: 'sending message'
      }))

      const response = await fetch('firebase url', //
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        })

      if (!response.ok) {
        throw new Error('Send cart data failed')
      }


      dispatch(uiActions.showNOtification({
        status: 'success',
        title: 'Success',
        message: 'sent cart data successfully'
      }))
    }

    if (isInitial) {
      isInitial = false
      return
    }

    sendCartData().catch(() => {
      dispatch(uiActions.showNOtification({
        status: 'error',
        title: 'Error',
        message: 'sent cart data Error'
      }))
    })

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
