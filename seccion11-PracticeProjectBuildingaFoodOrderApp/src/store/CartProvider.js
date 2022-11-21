import CartContext from "./cart-context";
import React, { useReducer, useState } from 'react'

const defaultCardContext = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        defaultCardContext.items = action.item
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