import {useState, useContext} from 'react';
import {cartContext} from "../context/CartContext"

function Counter({item}){
    const [count, setCount] = useState(1);
    const {addToCart} = useContext(cartContext);

    const handleSumar = ()=>{
        setCount(count + 1);
    }
    const handleRestar = ()=>{
        setCount(count-1);
    }

    const handleAddToCart = () =>{
        addToCart({
            id: item.id,
            title: item.title,
            price: item.price,
            thumbnail: item.thumbnail, // si lo necesitás después
            cantidad: count
        })
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick = {handleSumar}> + </button>
            <button onClick = {handleRestar} disabled={count === 1}> -</button>
            <button onClick = {handleAddToCart} disabled = {count === 0}>agregar al carrito</button>
        </div>

    )

}

export default Counter;