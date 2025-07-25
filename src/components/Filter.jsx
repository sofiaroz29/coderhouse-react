import React, {useState} from "react";

function Filter ({children}){
    const [filter, setFilter] = useState('all')
    return children(filter, setFilter);
    
}


export default Filter;