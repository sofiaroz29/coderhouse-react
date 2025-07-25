import { useState, useEffect } from "react";
import {useParams} from 'react-router';
import { getProduct } from "../firebase/db";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(){
    const [item, setITem] = useState()
    const {id} = useParams()

    useEffect(() =>{
        getProduct(id).then (res => setITem(res))
    }, [id])
 
    return (
        <ItemDetail item = {item}/>
    )
}


export default ItemDetailContainer