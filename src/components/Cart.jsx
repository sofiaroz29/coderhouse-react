import ListGroup from 'react-bootstrap/ListGroup'
import Button from  'react-bootstrap/Button'
import { useCart } from '../context/useCart'
import { useNavigate } from 'react-router'


function Cart(){

    const {cart} = useCart()
    const navigate = useNavigate
   
    if (cart.length === 0){
        return (
            <h2>no tienes nada en el carrito</h2>
        )
    }

    return (
        <div>
            <ListGroup className='d-flex justify-content-center align-items-center mt-5'>
                {cart.map(prod =>(
                    <ListGroup.Item key = {prod.id}className = 'd flex justify-content-between'>
                        {prod.title} x {prod.quantity}
                        <Button variant = 'danger'>delete</Button>
                    </ListGroup.Item>
                ))}
                
            </ListGroup>
            <h2> TOTAL: 10</h2>
            <Button className= 'w-75' variant = 'dark' onClick = {() => navigate('/checkout')}>ir al checkout</Button>
        </div>
    )
}


export default Cart