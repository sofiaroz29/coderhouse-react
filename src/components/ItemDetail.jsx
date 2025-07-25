import Counter from "./Counter";

import { useContext } from "react";
import {CartContext} from "../context/CartContext"

function ItemDetail ({item}){

    const contexto = useContext(CartContext)
    console.log (contexto)
    return (
        <div>
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <p>{item?.price}</p>
            <img src= {item?.thumbnail}></img>
            <Counter />
        </div>
        
    )
}

export default ItemDetail;