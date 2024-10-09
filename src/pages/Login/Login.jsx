import React from 'react'
import style from './Login.module.css'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'

const Login = ({ users, authUser }) => {
    const navigate = useNavigate()

    const authorization = (values, users) => {
        const user = users.find((u) => u.email === values.email && u.password === values.password)
        if (user) {
            authUser(user)
            navigate('/profile', { state: user })
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
                    password: ''
                }}
                onSubmit={(values) => authorization(values, users)}
            >
                <Form>
                    <Field name='email' />
                    <Field name='password' />
                    <button type='submit'>Login</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Login