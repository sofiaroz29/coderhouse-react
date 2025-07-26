import {cartContext} from "./CartContext"
import { useState } from "react";
import { toast } from 'react-toastify';

function CartProvider ({children}){
    const [cart, setCart] = useState([])
    const addToCart = (product) =>{
        const existingProduct = cart.find((prod) => prod.id === product.id)

        if (existingProduct) {
            const updatedCart = cart.map((prod) =>
                prod.id === product.id ? { ...prod, cantidad: prod.cantidad + product.cantidad } : prod
            )
            setCart(updatedCart)
            toast.info(`Se agregó ${product.cantidad} unidad(es) más de "${product.title}"`)
        } else {
            setCart([...cart, product])
            toast.success(`Se agregó "${product.title}" al carrito!`);
        }
    }

    const getCantidad = () => {
        const cantidades = cart.map (prod => prod.cantidad)
        const total = cantidades.reduce((acc, current) => acc + current, 0)
        return total
    }

    const incrementQuantity = (id) => {
        const updatedCart = cart.map(prod => {
            if (prod.id === id) {
                return { ...prod, cantidad: prod.cantidad + 1 }
            }
            return prod
        })
        setCart(updatedCart)
    }   

    const decrementQuantity = (id) => {
        const updatedCart = cart.map(prod => {
            if (prod.id === id && prod.cantidad > 1) {
                return { ...prod, cantidad: prod.cantidad - 1 }
            }
            return prod
        })
        setCart(updatedCart)
    }

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
    }

    const clearCart = () => {
        setCart([]);
    };

    return (
        <cartContext.Provider value ={{cart, addToCart, getCantidad, incrementQuantity, decrementQuantity, removeFromCart, clearCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider;