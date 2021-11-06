import './Text.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Text() {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (           
                <Col>
                    <Card
                      bg={'dark'}
                      text={'white'}
                    >
                    <Card.Header>Card 1</Card.Header>
                    <Card.Body >
                        <Card.Title> Card 1 Title </Card.Title>
                        <Card.Text>
                        Card 1 Text
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            ))}
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card
                      bg={'dark'}
                      text={'white'}
                    >
                    <Card.Header>Card 2</Card.Header>
                    <Card.Body>
                        <Card.Title> Card 2 Title </Card.Title>
                        <Card.Text>
                        Card 2 Text
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            ))}
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card
                      bg={'dark'}
                      text={'white'}
                    >
                    <Card.Header>Card 3</Card.Header>
                    <Card.Body>
                        <Card.Title> Card 3 Title </Card.Title>
                        <Card.Text>
                        Card 3 Text
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            ))}
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card
                      bg={'dark'}
                      text={'white'}
                    >
                    <Card.Header>Card 4</Card.Header>
                    <Card.Body>
                        <Card.Title> Card 4 Title </Card.Title>
                        <Card.Text>
                        Card 4 Text
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Text;