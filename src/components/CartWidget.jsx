import cart from "../assets/cart.webp"
import "../NavbarStyles.css"
import { useContext } from "react";
import {CartContext} from "../context/CartContext"
import {useNavigate} from 'react-router'


function CartWidget () {

    const {getCantidad} = useContext(CartContext);
    const cantidad = getCantidad();
    const navigate = useNavigate()

    return (
        <div className="cart-container">
            <img className="carticon" src={cart} width="50" height="50" />
            <div className="count-products">
                <span id="contador-productos">{cantidad}</span>
            </div>
        </div>
    );
}


export default CartWidget;
