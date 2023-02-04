import { uiActions } from '../ui-slice'
import { cartActions } from '../cart-slice'

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNOtification({
      status: 'pending',
      title: 'sending...',
      message: 'sending message'
    }))

    const sendRequest = async () => {
      const response = await fetch('url from firebase',
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        })

      if (!response.ok) {
        throw new Error('Send cart data failed')
      }
    }

    try {
      await sendRequest();
      dispatch(uiActions.showNOtification({
        status: 'success',
        title: 'Success',
        message: 'sent cart data successfully'
      }))

    } catch (error) {
      dispatch(uiActions.showNOtification({
        status: 'error',
        title: 'Error',
        message: 'sent cart data Error'
      }))
    }
  }
}

export const fetchCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('url from firebase')

      if (!response.ok) {
        throw new Error('Could not fetch cart data')
      }
      const data = await response.json();
      return data;
    }

    try {
      const cartData = await sendRequest();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }))
    } catch (error) {
      dispatch(uiActions.showNOtification({
        status: 'error',
        title: 'Error',
        message: 'fetch cart data Failed'
      }))
    }
  }
}