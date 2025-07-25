import {useState, useContext} from 'react';
import {CartContext} from "../context/CartContext"

function Counter({item}){
    const [count, setCount] = useState(0);
    const {addToCart} = useContext(CartContext);

    const handleSumar = ()=>{
        setCount(count + 1);
    }
    const handleRestar = ()=>{
        setCount(count-1);
    }

    const handleAddToCart = ()=>{
        addToCart({...item, cantidad: count})
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick = {handleSumar}> + </button>
            <button onClick = {handleRestar}> -</button>
            <button onClick = {handleAddToCart} disabled = {coonter === 0}>agregar al carrito</button>
        </div>

    )

}

export default Counter;