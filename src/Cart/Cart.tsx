import React, { FC } from 'react'
import classes from './Cart.module.css'
import { Button } from '@material-ui/core'
import { CartItemType } from '../App'
import CartItem from './CartItem';

type Props = {
  cartItems: CartItemType[],
  addToCart: (clickedItem: CartItemType) => void,
  removeFromCart: (id: number) => void
}

const Cart: FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <div>
      <h2>Your Shopping cart</h2>
      {cartItems.length === 0 && <p>No items in carts</p>}
      {cartItems.map((item, key) => <CartItem
        key={item.id}
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />)}
    </div>
  )
}

export default Cart
