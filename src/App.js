import { Routes, Route, useNavigate } from 'react-router-dom';
import Loyout from './components/Loyout/Loyout';
import { useState, useEffect, useRef } from 'react';

import {HomePage, ProductPage, ProductsPage, CartPage, OrderPage, Login, Profile, Register} from './pages'

import { useFetch } from './hooks/fetchHook';
import axios from 'axios'

import './App.css';

export const instace = axios.create({
  baseURL: 'https://fakestoreapi.com/',
})




function App() {
  const [products, setProducts] = useFetch('products')
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [productsFilter, setproductsFilter] = useState(products);
  const [isSorted, setIsSorted] = useState(false);

  const initalRender = useRef(false)

  // products?.map((el) => {
  //   return {
  //     ...el,
  //     initprice: el.price,
  //     count: 1
  //   }
  // })
  // LocalStorage SetItem
  useEffect(() => {

    if(initalRender.current){
      localStorage.setItem('cart', JSON.stringify(cart))
    }
   
    initalRender.current = true
  }, [cart])

  // getProducts



  
  // console.log(data);
  
  // useEffect(() => {
  //   instace.get('products')
  //     .then((res) => setProducts(res.data.map(el => {
  //       return {
  //         ...el,
  //         initprice: el.price,
  //         count: 1
  //       }
  //     })))
  // }, [])

  //getUsers
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers([...res.data, { email: "admin", username: '1234', id: '1111' }]))
  }, [])


  const navigate = useNavigate()


  let createUser = (newUser) => {
    setUsers((prev) => {
      return [...prev, { id: 4, ...newUser }]
    })

  }


  let authUser = (verifUser) => {
    setUser(verifUser)
  }

  let logOutUser = () => {
    setUser(null)
    navigate('/')
  }

  let sortPriceToAbove = () => {
    setIsSorted((prev) => true);
    setproductsFilter(productsFilter.toSorted((a, b) => a.price - b.price));
  }

  let sortPriceToDown = () => {
    setIsSorted((prev) => true);
    setproductsFilter(productsFilter.toSorted((a, b) => b.price - a.price));
  }

  let reset = () => {
    setIsSorted((prev) => false);
  }
  let total = cart.reduce((accum, elem) => {
    return accum + elem.initprice
  }, 0)

  // addCartFunctional
  const addToCart = (item) => {
    let isContain = false;

    cart.forEach((cartProduct) => {
      if (cartProduct.id === item.id) {
        isContain = true;
        setCart(cart.map((elem) => {
          if (elem.id === cartProduct.id) {
            return {
              ...elem,
              count: ++elem.count,
              initprice: elem.count * elem.price
            }
          } else {
            return elem
          }
        }))
      }
    })

    if (!isContain) {
      setCart([...cart, item])
    }
  }

  const changeCartToCount = (count, item) => {
    console.log(count, item);
    setCart(cart.map((elem) => {
      if (elem.id === item.id) {
        return {
          ...elem,
          count: count,
          initprice: count * elem.price
        }
      } else {
        return elem
      }
    }))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loyout
          logOutUser={logOutUser}
          user={user}
          cart={cart}
          sortPriceToAbove={sortPriceToAbove}
          sortPriceToDown={sortPriceToDown}
          reset={reset} />}>
          <Route index path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage products={isSorted ? productsFilter : products} addToCart={addToCart} />} />
          <Route path='/products/:id' element={<ProductPage />} />
          <Route path='/cart' element={<CartPage changeCartToCount={changeCartToCount} total={total} />} />
          <Route path='/cart/order' element={<OrderPage />} />
          <Route path='/login' element={<Login users={users} authUser={authUser} />} />
          <Route path='/profile/:id' element={<Profile products={products} setProducts={setProducts} />} />
          <Route path='/register' element={<Register users={users} createUser={createUser} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
