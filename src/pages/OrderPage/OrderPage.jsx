import React from 'react'
import style from './OrderPage.module.css'
import {useLocation} from 'react-router-dom'

const OrderPage = () => {
  const {state} = useLocation()
  console.log(state);
  
  return (
    <div>
      <h1>{state.name}</h1>
    </div>
  )
}

export default OrderPage