import React, { FC } from 'react'
import classes from './CartItem.module.css'
import { Button } from '@material-ui/core'
import { CartItemType } from '../App'

type Props = {
  item: CartItemType,
  addToCart: (item: CartItemType) => void,
  removeFromCart: (id: number) => void
}

const CartItem: FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className={classes.cartItem}>
      <div>
        <h3>{item.title}</h3>
        <div className={classes.information}>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price)}</p>
        </div>

        <div className={classes.buttons}>
          <Button size="small" variant="contained" color="secondary" onClick={() => removeFromCart(item.id)}>
            -
          </Button>
          <p>{item.amount}</p>
          <Button size="small" variant="contained" color="primary" onClick={() => addToCart(item)}>
            +
          </Button>
        </div>

      </div>
      <img className={classes.img} src={item.image} alt={item.title} />
    </div>
  )
}

export default CartItem
