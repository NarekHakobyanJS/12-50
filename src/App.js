import { Routes, Route } from 'react-router-dom';
import Loyout from './components/Loyout/Loyout';
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

import './App.css';
import CartPage from './pages/CartPage/CartPage';


function App({ products }) {

  const [cart, setCart] = useState([]);
  const [productsFilter, setproductsFilter] = useState(products);
  const [isSorted, setIsSorted] = useState(false);
  console.log(isSorted);

  let sortPriceToAbove = () => {
    setIsSorted((prev)=> true);
    setproductsFilter(productsFilter.toSorted((a,b) => a.price - b.price));
  }

  let sortPriceToDown = () => {
    setIsSorted((prev) => true);
    setproductsFilter(productsFilter.toSorted((a,b) => b.price - a.price));
  }

  let reset = () => {
    setIsSorted((prev)=> false);
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
        <Route path='/' element={<Loyout cart={cart} sortPriceToAbove={sortPriceToAbove} 
        sortPriceToDown={sortPriceToDown} reset={reset} /> }>
          <Route index path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage products={isSorted ? productsFilter : products } addToCart={addToCart} />} />
          <Route path='/cart' element={<CartPage cart={cart} changeCartToCount={changeCartToCount} total={total} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
