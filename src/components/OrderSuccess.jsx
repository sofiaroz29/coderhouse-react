import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router';

function OrderSuccess({ order }) {
    const navigate = useNavigate()
    return (
        <Container className="my-5" style={{ maxWidth: '600px' }}>
        <Card className="text-center">
            <Card.Header className="bg-success text-white">
            ¡Compra realizada con éxito!
            </Card.Header>
            <Card.Body>
            <Card.Title>ID de la orden: <strong>{order.id}</strong></Card.Title>
            <Card.Text>
                <h5>Datos del usuario:</h5>
                <p><strong>Nombre:</strong> {order.user.name}</p>
                <p><strong>Email:</strong> {order.user.email}</p>
                <p><strong>Teléfono:</strong> {order.user.phone}</p>
                <h5>Productos:</h5>
                <ul className="list-unstyled">
                {order.products.map((prod, i) => (
                    <li key={i}>
                    {prod.title} x {prod.cantidad || prod.quantity || 1}
                    </li>
                ))}
                </ul>
            </Card.Text>
            <Button variant="primary" onClick={() => navigate("/")}>
                Volver a la tienda
            </Button>
            </Card.Body>
        </Card>
        </Container>
    );
}


export default OrderSuccess