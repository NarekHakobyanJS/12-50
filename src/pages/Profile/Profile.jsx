import React, { useEffect, useState } from 'react'
import style from './Profile.module.css'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const [user, setUser] = useState(null)
    const {id} = useParams();

   

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then(res => setUser(res)) 
    }, [])
    
    
    return (
        <div>
            <h1>{user?.name}</h1>
        </div>
    )
}

export default Profile