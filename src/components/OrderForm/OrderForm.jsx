import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

const OrderForm = ({total}) => {
    const navigate = useNavigate()
    // console.log(navigate);
    
    const order = (values) => {
        let byOrder = {
            ...values,
            total
        }
        navigate('/cart/order', {state : byOrder})
        // console.log(verjnakan)
    }
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    address: '',
                }}
                onSubmit={(values) => order(values)}
            >
                <Form>
                    <Field name='name' />
                    <Field name='email' />
                    <Field as="select" name="address">
                        <option value="armavir">Armavir</option>
                        <option value="yerevan">Yerevan</option>
                        <option value="garni">Garni</option>
                    </Field>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default OrderForm