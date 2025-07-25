import {CartContex} from "./CartContext"

function CartProvider ({children}){
    const [cart, setCart] = useState([])
    const pepito = "pepito";
    const addToCart = (product) =>{
        setCart([...cart, product])
    }

    const getCantidad = () => {
        const cantidades = cart.map (prod => prod.cantidad)
        const total = cantidades.reduce((acc, current) => acc + current)
        return total
    }

    return (
        <CartContex.Provider value ={{cart, addToCart, getCantidad}}>
            {children}
        </CartContex.Provider>
    )
}

export default CartProvider;