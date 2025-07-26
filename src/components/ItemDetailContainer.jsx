import { useState, useEffect } from "react";
import {useParams} from 'react-router';
import { getProduct } from "../firebase/db";
import ItemDetail from "./ItemDetail";
import { withItemLoading } from '../hoc/withItemLoading';

const ItemDetailWithLoading = withItemLoading(ItemDetail);

function ItemDetailContainer(){
    const [item, setItem] = useState()
    const {id} = useParams()

    useEffect(() =>{
        console.log("Buscando producto con ID:", id)
        getProduct(id).then (res =>{
            console.log("Producto recibido:", res); 
            setItem(res)
        } )
    }, [id])
 
    return (
        <ItemDetailWithLoading item = {item}/>
    )
}


export default ItemDetailContainer