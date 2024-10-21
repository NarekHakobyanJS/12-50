import React, { useState } from 'react'
import style from './CartItem.module.css'

const CartItem = ({ cartItem, changeCartToCount }) => {
  let [count, setCount] = useState(cartItem.count)

  const plus = () => {

    setCount(++count)
    changeCartToCount(count, cartItem)
  }

  const minus = () => {
    if (count >= 1) {
      setCount(--count)
      changeCartToCount(count, cartItem)
    }
  }
  return (
    <div>

      <h4>{cartItem.title}</h4>
      <h2>{cartItem.initprice} $</h2>
      <img width={200} src={cartItem.image} />
      <div>
        <button onClick={() => plus()}>+</button>
        <span>{cartItem.count}</span>
        <button onClick={() => minus()}>-</button>
      </div>

    </div>
  )
}

export default CartItem