import React from 'react'
import style from './Product.module.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/fetchHook.js'

const ProductPage = () => {
  const {id} = useParams()


  const [product] = useFetch(`products/${id}`)

  return (
    <div>
      <h1>{product?.title}</h1>
    </div>
  )
}

export default ProductPage