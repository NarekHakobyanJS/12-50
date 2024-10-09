import React from 'react'
import style from './Header.module.css'
import Nav from '../Nav/Nav'
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Header = ({ cart, sortPriceToAbove, sortPriceToDown, reset, user, logOutUser }) => {
  return (
    <header>
      <div className={style.logo_block}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPdmTh-tiZ-yVqDET1zbusOoYrNne4YyR0A&s" />
      </div>
      <div className={style.nav_block}>
        <Nav />
        <button onClick={sortPriceToAbove}>sort price to above</button>
        <button onClick={sortPriceToDown}>sort price to down</button>
        <button onClick={reset}>Reset</button>

      </div>
      <div className={style.icons_block}>
        <NavLink to='/cart'>
          <FaShoppingCart />
          <sup className={style.cartCount}>{cart.length}</sup>
        </NavLink>
        {
          user 
          ? <>
            <FaUserAlt /> {user.name}
            <button onClick={logOutUser}>Log Out</button>
          </>
            :
            <NavLink to='/login'>  Sign In </NavLink>
        }

      </div>
    </header>
  )
}

export default Header