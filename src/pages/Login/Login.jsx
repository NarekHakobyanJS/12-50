import React from 'react'
import style from './Login.module.css'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'

const Login = ({ users, authUser }) => {
    const navigate = useNavigate()

    const authorization = (values, users) => {
        const user = users.find((u) => u.email === values.email && u.username === values.username)
        if (user) {
            console.log(user);
            authUser(user)
            navigate(`/profile/${user.id}`)
        }else {
            navigate('/register')
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: '',
                    username: ''
                }}
                onSubmit={(values) => authorization(values, users)}
            >
                <Form>
                    <Field name='email' placeholder='email'/>
                    <Field name='username' placeholder='password'/>
                    <button type='submit'>Login</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Login