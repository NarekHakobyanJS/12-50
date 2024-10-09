import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Loyout = ({ cart, sortPriceToAbove, sortPriceToDown, reset, user, logOutUser }) => {
  return (
    <div>
      <Header
      logOutUser={logOutUser}
        user={user}
        cart={cart}
        sortPriceToAbove={sortPriceToAbove}
        sortPriceToDown={sortPriceToDown}
        reset={reset} />
      <Outlet />
    </div>
  )
}

export default Loyout