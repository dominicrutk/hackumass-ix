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
                    <Card.Body >
                        <Card.Text>
                        Above a map displays various green, yellow, and red circles. Each circle corresponds to a location 
                        where one or more UMass hydration stations are present. The color of the circle corresponds to the 
                        average status of the filters at a given location, where a green circle corresponds to a majority of healthy
                        filters, a yellow circle corresponds to a majority of filters nearing the need for replacement, and
                        a red circle indicates a majority of filters need to be replaced. Below the map, there is a listing of the
                        locations, the number of filters in each status category, and the estimated urgency associated with
                        replacing filters in that location.
                        </Card.Text>
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
                        This project aims to improve the health of students by improving their access to water by assisting 
                        facilities in their task of prioritizing resources. With a limited staff and potentially limited replacement filters,
                        on a near-daily basis facilities decides which tasks on campus are of the highest priority and which areas
                        require their attention most when executing those tasks. When it comes to the task of replacing the filters of the hydration
                        stations on campus, due to the number of separate filters, 243 as of last fall, it can be a challenge to
                        determine where there are filters in need of replacement. Further, even with this data, the task of assessing
                        the urgency of replacement in areas based on their usage and the number of filters present can be daunting. This
                        led us to create a user interface that shows a map of the filters, create an algorithm to calculate the estimated
                        urgency for each location, and display those urgencies in a table.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                      bg={'dark'}
                      text={'white'}
                    >
                    <Card.Header>Methods</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        The hardware in this project involves two components, one component to detect the status of the filter and another to
                        estimate the frequency with which the filters are used. The detection component utilizes a raspberry pi NoIR camera that
                        is connected to a 3D-printed mount for the filter. This sensor continuosuly checks the status and updates a backend SQL
                        database that feeds into the react frontend user interface. The frequency with which the filters are used is estimated using
                        an ultrasonic distance sensor that tracks the amount of time a stream of water is running. This time is proportional to the
                        volume of water output and thereby serves as an estimate for how often the filter is used. These two components, status
                        and frequency of use, are factored into our algorithm that ranks the locations and orders them accordingly in the table.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                      bg={'dark'}
                      text={'white'}
                    >
                    <Card.Header>Hardware visual</Card.Header>
                    <Card.Body>
                        <img src="IMG_6640.jpg"></img>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Text;