import React, { FC } from 'react'
import { CartItemType } from '../App'
import classes from './Item.module.css'
import Button from '@material-ui/core/Button';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void
}

const Item: FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <div className={classes.item}>
      <img className={classes.img} src={item.image} alt="item" />
      <div className={classes['item-data']}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button className={classes.btn} variant="contained" color="primary" onClick={() => handleAddToCart(item)}>Add to Cart</Button>
    </div>
  )
}

export default Item
