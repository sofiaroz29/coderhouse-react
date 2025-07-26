import { Spinner } from "react-bootstrap";

export const withItemLoading = (Component) => {
  function ComponentWithItemLoading(props) {
    if (!props.item || !props.item.title) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      );
    }

    return <Component {...props} />;
  }

  return ComponentWithItemLoading;
};