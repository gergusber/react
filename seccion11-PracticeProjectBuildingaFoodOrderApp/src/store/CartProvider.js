import CartContext from "./cart-context";
import React, { useReducer } from 'react'

const defaultCardContext = {
  items: [],
  totalAmount: 0
}
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = +state.totalAmount + +action.item.price * +action.item.amount;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem
    }
    else {
      updatedItems = state.items.concat(action.item)
    }
    
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalAmount =state.totalAmount - existingItem.price

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item=>item.id !== action.id )
    } 
    else{
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
      updatedItems= [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;

    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  return defaultCardContext;
};

const CartProvider = props => {
  const [cardState, cartDispatchAction] = useReducer(cartReducer, defaultCardContext)

  const addItemToCartHandler = (item) => {
    cartDispatchAction({ type: 'ADD', item })
  }

  const removeItemToCartHandler = (id) => {
    cartDispatchAction({ type: 'REMOVE', id })
  }

  const cartContext = {
    items: cardState.items,
    totalAmount: cardState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
  }

  return (<CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>)
}

export default CartProvider