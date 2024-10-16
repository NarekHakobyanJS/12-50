import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import instace from '../../App.js'
const Profile = ({ products, setProducts }) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const { id } = useParams();


    const remove = (id) => {
        instace.delete(`products/${id}`)

        setProducts(products.filter((el) => el.id !== id))
    }


    const create = () => {
        instace.post('/products', { title, price })
            .then((res) => setProducts([...products, res.data]))
    }
    return (
        <div>

            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='price' />
            <button onClick={create}>create</button>

            {
                products.map((el) => (
                    <div key={el.id} className={el.product}>
                        <h3>{el.title}</h3>
                        <b>{el.price}$</b>
                        <img width={200} src={el.image} />
                        <button onClick={() => remove(el.id)}>X</button>
                    </div>)
                )
            }
        </div>
    )
}

export default Profile