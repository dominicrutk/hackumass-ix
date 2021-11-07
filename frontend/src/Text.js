import {Card, Col, Container, Row} from 'react-bootstrap';

const cards = [{

}, {
    
}];

function Text() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card
                    bg={'dark'}
                    text={'white'}
                    >
                        <Card.Header>Description</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Above a map displays various green, yellow, and red circles. Each circle corresponds to a location 
                                where one or more UMass hydration stations are present. The color of the circle corresponds to the 
                                average status of the filters at a given location, where a green circle corresponds to a majority of healthy
                                filters, a yellow circle corresponds to a majority of filters nearing the need for replacement, and
                                a red circle indicates a majority of filters need to be replaced. Additionally, the size of the circles 
                                corresponds to the number of filters present. Below the map, there is a listing of the
                                locations, the number of filters in each status category, and the estimated urgency associated with
                                replacing filters in that location. Urgency is measured from 0 (meaning no urgency) to 1 (meaning high urgency).
                            </Card.Text>
                            <img width = '100%' height = '100%' src="ImageOfFountain.jpg"></img>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                    bg={'dark'}
                    text={'white'}
                    >
                        <Card.Header>Motivations</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                This project aims to improve the lives of all people in the UMass community by improving their access to water. 
                                It achieved this by assisting the facilities staff in their task of prioritizing resources. With a limited staff 
                                and potentially limited replacement filters, facilities managers decide which tasks on campus are of the 
                                highest priority and which areas require their attention most. 
                                When it comes to the task of replacing the filters of the hydration
                                stations on campus, due to the number of separate filters, 243 as of last fall, it can be a challenge to
                                keep track of which filters need to be replacement. Further, even with this data, the task of assessing
                                the urgency of replacement in areas based on their usage and the number of filters present can be daunting. This
                                led us to create a user interface that shows a map of the filters, estimates the urgencies for replacement, 
                                and sort those locations in a table based on their urgencies.
                            </Card.Text>
                            <img width = '100%' height = '100%' src="img2.jpg"></img>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                    bg={'dark'}
                    text={'white'}
                    >
                        <Card.Header>How it's built</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Each device is made up of a Raspberry Pi, a camera, and a 3D-printed mount. The camera uses OpenCV to check the color 
                                of the filter status light to determine whether the filter needs replacing. The information from each device is posted
                                 to a backend running on an AWS E2 instance using an Express.js server with MySQL. The app’s frontend is made with React,
                                  and it uses a JavaScript library called Leaflet to display the information on the map. 

                            </Card.Text>
                            <img width = '100%' height = '100%' src="img3.jpg"></img>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Text;