import React from 'react'
import style from './Product.module.css'
import { useParams } from 'react-router-dom'

const ProductPage = ({products}) => {
  const {id} = useParams()
 
  const product = products.find((prod) => prod.id === +id)

  return (
    <div>
      <h1>{product?.title}</h1>
    </div>
  )
}

export default ProductPage