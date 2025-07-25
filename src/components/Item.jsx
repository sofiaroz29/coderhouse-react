import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router'

function Item ({item}){
    const navigate = useNavigate()
    return (
        <Col lg = {3} className = 'mb-4'>
            <Card>
                <Card.Img variant="top" src={item.thumbnail} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        ${item.price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate(`/item/${item.id}`)}>ver mas </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item