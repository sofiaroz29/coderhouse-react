import ListGroup from 'react-bootstrap/ListGroup'
import Button from  'react-bootstrap/Button'
import { useCart } from '../context/useCart'
import { useNavigate } from 'react-router'


function Cart(){

    const {cart, incrementQuantity, decrementQuantity, removeFromCart, clearCart} = useCart()
    const navigate = useNavigate()
   
    if (cart.length === 0){
        return (
            <div>
                <h2>Tu carrito esta vacio</h2>
                <h5>Te invitamos a recorrer nuestra tienda online 
                y conocer todos los productos que tenemos para vos.</h5>
                <Button onClick = {() => navigate("/")}> Ver los productos</Button>
            </div>
            
        )
    }

    const total = cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)

    return (
        <div>
             <ListGroup>
                {cart.map(prod => (
                    <ListGroup.Item key={prod.id} className='d-flex justify-content-between align-items-center'>
                         <img 
                            src={prod.thumbnail} 
                            alt={prod.title} 
                            style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
                        />
                        <div className='w-50'>
                            <strong>{prod.title}</strong>
                            <div>Precio unitario: ${prod.price}</div>
                            <div>Subtotal: ${prod.price * prod.cantidad}</div>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <Button variant='secondary' onClick={() => decrementQuantity(prod.id)} disabled={prod.cantidad <= 1}>-</Button>
                            <span>{prod.cantidad}</span>
                            <Button variant='secondary' onClick={() => incrementQuantity(prod.id)}>+</Button>
                        </div>
                        <Button variant='danger' onClick={() => removeFromCart(prod.id)}>Eliminar</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
           <div className='text-center mt-4'>
                <h3>Total: ${total}</h3>
                <Button className='w-50 mt-3' variant='dark' onClick={() => navigate('/checkout')}>
                    Ir al checkout
                </Button>
                 <Button className="w-75" variant="outline-danger" onClick={clearCart}>
                    Vaciar carrito
                </Button>
            </div>
        </div>
    )
}


export default Cart