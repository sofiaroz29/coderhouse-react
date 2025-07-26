import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useCart} from '../context/useCart'
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../firebase/db';
import OrderSuccess from './OrderSuccess';
import { useState } from 'react'; 


function Checkout (){
    const {cart, clearCart} = useCart()
    const [orderData, setOrderData] = useState(null)

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const phone = form.phone.value

        const order = {
            user: {email, name, phone},
            products: cart, 
            time: serverTimestamp(),
        }

        const id = await createOrder(order)
        setOrderData({ id, ...order })
        form.reset()
        clearCart()

      
    }

    if (orderData) {
        return <OrderSuccess order={orderData} />
    }

    return (
        <div>
            <Form onSubmit = {handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Lucas Martinez" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="1150567893" required />
                </Form.Group>

                
                <Button variant="primary" type="submit">
                    Finalizar compra
                </Button>
            </Form>
        </div>
    )
}

export default Checkout