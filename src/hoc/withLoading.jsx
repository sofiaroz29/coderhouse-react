import Spinner from 'react-bootstrap/Spinner'
export const withLoading = (Component) => {
    function ComponentWithLoading (props){
        
        if (props.items.length === 0){
           return (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                </div>
            );
        }
        
        return (
            <Component {...props} />
        )
    }

    return ComponentWithLoading
}
