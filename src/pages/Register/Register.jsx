import React, { useContext } from 'react'
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';

const Register = () => {
  const { users, createUser } =useContext(MyContext)
  const navigate = useNavigate()

  const register = (values, users) => {
    const isValidData = users.some((u) => u.email === values.email)
    console.log(isValidData);
    
    if (!isValidData) {
      createUser(values)
      navigate('/login')
    } else {
      console.log("nman email ka");
    }

  }
  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: ""
        }}
        onSubmit={(values) => register(values, users)}
      >
        <Form>
          <Field placeholder='name' name='name' />
          <Field placeholder='email' name='email' />
          <Field placeholder='password' name='password' />
          <button type='submit'>Register</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Register