import React from 'react'
import style from './CartPage.module.css'
import CartItem from '../../components/CartItem/CartItem'
import OrderForm from '../../components/OrderForm/OrderForm'

const CartPage = ({ changeCartToCount, total }) => {

  const cart = JSON.parse(localStorage.getItem('cart'))

  return (
    <div>
      <h1> total : {total}$</h1>
      {
        cart?.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} changeCartToCount={changeCartToCount} />
        })
      }
      <OrderForm total={total} />

    </div>
  )
}

export default CartPage