export const withLog = (Component) => {
    function ComponentWithLog (props){
        console.log ("mensajito")
        return (
            <Component {...props} />
        )
    }

    return ComponentWithLog
}
