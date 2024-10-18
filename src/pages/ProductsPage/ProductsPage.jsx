import React from 'react'
import Product from '../../components/Product/Product'

import style from './ProductsPage.module.css'

const ProductsPage = ({products, addToCart}) => {
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