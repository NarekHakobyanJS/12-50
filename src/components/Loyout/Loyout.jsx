import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Loyout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Loyout