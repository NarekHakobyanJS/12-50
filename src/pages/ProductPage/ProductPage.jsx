import React, { useEffect, useState } from 'react'
import style from './Product.module.css'
import { useParams } from 'react-router-dom'
import { instace } from '../../App.js'

const ProductPage = () => {
  const [product, setProduct] = useState(null)
  const {id} = useParams()
  useEffect(() => {

    instace.get(`products/${id}`)
      .then((res) => setProduct(res.data))
  }, [])

  return (
    <div>
      <h1>{product?.title}</h1>
    </div>
  )
}

export default ProductPage