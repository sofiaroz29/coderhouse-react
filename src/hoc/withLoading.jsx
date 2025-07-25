import { useEffect } from "react"

export const withLoading = (Component) => {
    function ComponentWithLoading (props){
        
        if (props.item.length === 0){
            return <div>no han llegado los productos</div>
        }
        
        return (
            <Component {...props} />
        )
    }

    return ComponentWithLoading
}
