import React, { useState } from 'react';
import { useQuery } from 'react-query'
import './App.css';
import Rock from './Rock';
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Badge from '@material-ui/core/Badge'
import classes from './App.module.css'
import Item from './item/Item';
import Cart from './Cart/Cart';

//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json()
}

const App = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((total: number, items) => items.amount + total, 0)

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if (isItemInCart) {
        return prev.map(item => item.id === clickedItem.id ? {
          ...item, amount: item.amount + 1
        } : item)
      }

      return [...prev, { ...clickedItem, amount: 1 }]

    })
  }

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => {
      let currentItem = prev.find(item => item.id === id)
      if (currentItem.amount === 1) {
        return prev.filter(item => item.id !== id)
      }

      currentItem.amount -= 1
      return [...prev]
    })
  }

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong</div>

  return (
    <div  >
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)} >
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </Drawer>
      <button className={classes['cart-btn']} onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          Cart
        </Badge>
      </button>
      <div className={classes.items}>
        {data?.map((item, key) => <Item item={item} handleAddToCart={handleAddToCart} key={key} />)}
      </div>
    </div>
  );
}

export default App;
