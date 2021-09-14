import React, { FC } from 'react'
import { CartItemType } from '../App'
import classes from './Item.module.css'

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void
}

const Item: FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <div className={classes.header}>
      <div className={classes.item}>Item</div>
      {/* <div className={classes.item}>Item</div>
      <div className={classes.item}>Item</div>
      <div className={classes.item}>Item</div>
      <div className={classes.item}>Item</div>
      <div className={classes.item}>Item</div>
      <div className={classes.item}>Item</div>
      <div className={classes.item}>Item</div> */}
    </div>
  )
}

export default Item
