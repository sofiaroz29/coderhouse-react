import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { withLog } from "../hoc/withLog";
import { withLoading } from "../hoc/withLoading";
import { useParams } from "react-router";
import {getProducts, getProductsByCategory } from "../firebase/db"

const itemListWithLog = withLog(ItemList)
const itemListWithLoading = withLoading (ItemList)
function ItemListContainer (){
    const [items, setItems] = useState ([])
    const {categoryName} = useParams()

    useEffect (() =>{
        // const url = "https://fakestoreapi.com/products"
        // const urlCategory = `https://dummyjson.com/products/category/${categoryName}`
        // fetch(categoryName ? urlCategory : url)
        // .then((res) => res.json())
        // .then((data) => setItems(data.products));

        // if (categoryName) {
        //     const urlCategory = `https://dummyjson.com/products/category/${categoryName}`;
        //     fetch(urlCategory)
        //     .then((res) => res.json())
        //     .then((data) => setItems(data.products))
            
        // } else {
        //     const categories = ["tops", "mens-shirts","beauty","womens-jewellery",];

        //     Promise.all(categories.map(cat =>
        //         fetch(`https://dummyjson.com/products/category/${cat}`).then(res => res.json())
        //     ))
        //     .then(results => {
        //         const allProducts = [];
        //         results.forEach(res => {
        //         allProducts.push(...res.products);
        //         });

        //         setItems(allProducts);
        //     })
        // }

        
        
        if (categoryName) {
            getProductsByCategory(categoryName).then (res => setItems(res))
        }
        else {
            getProducts().then(res => setItems(res))
        }

    }, [categoryName]);


    return (
       <itemListWithLoading items = {items} />
    );

    

}

export default ItemListContainer;