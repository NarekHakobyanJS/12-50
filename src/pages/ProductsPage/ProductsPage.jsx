import React, { useContext } from 'react'
import Product from '../../components/Product/Product'

import style from './ProductsPage.module.css'
import { MyContext } from '../../App'

const ProductsPage = () => {
  const { products, addToCart } = useContext(MyContext)

  return (
    <div>
      <div className={style.products}>
        {
          products?.map((product) => {
            return <Product key={product.id} product={product} addToCart={addToCart} />
          })
        }
      </div>
    </div>
  )
}

export default ProductsPage