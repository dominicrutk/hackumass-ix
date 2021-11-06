import Table from 'react-bootstrap/Table';
import WaterFountainRow from './WaterFountainRow';
import { useEffect, useState } from 'react';

function Search() {

    // let buildings = [];
    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/building')
            .then(response => response.json())
            .then(data => {
                setBuildings(data)
                console.log(buildings);
            })
            .catch(console.err);
    }, []);


    const t = {
        urgency: 1,
        location: "ILC",
        greens: 1,
        yellows: 2,
        reds: 3
    }

    console.log('rendered the search component');

    return ( 
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Urgency</th>
                <th>Location</th>
                <th>Greens</th>
                <th>Yellows</th>
                <th>Reds</th>
                </tr>
            </thead>
            <tbody>
                {buildings.map(bd => <WaterFountainRow building={bd} key={bd.id}/>)}
            </tbody>
        </Table>
    );
}

export default Search;