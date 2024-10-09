import React from 'react'
import style from './Profile.module.css'
import { useLocation } from 'react-router-dom'

const Profile = () => {
    const { state } = useLocation()
    return (
        <div>
            Profile : {state.email}
        </div>
    )
}

export default Profile