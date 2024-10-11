import React, { useEffect, useState } from 'react'
import style from './Product.module.css'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const [product, setProduct] = useState(null)
  const {id} = useParams()
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res))
  }, [])
  // const product = products.find((prod) => prod.id === +id)

  return (
    <div>
      <h1>{product?.title}</h1>
    </div>
  )
}

export default ProductPage