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
                sortBuildingsByUrgency(data);
                setBuildings(data)
                console.log(buildings);
            })
            .catch(console.err);
    }, []);

    function sortBuildingsByUrgency(bldg) {
        for (let i = 0; i < bldg.length; i++) {
            bldg[i].greens = 0;
            bldg[i].yellows = 0;
            bldg[i].reds = 0;
            bldg[i].waterFountains.forEach(wf => {
                if (wf.status === "GREEN") bldg[i].greens++;
                if (wf.status === "YELLOW") bldg[i].yellows++;
                if (wf.status === "RED") bldg[i].reds++;
            });
            const total = bldg[i].greens + bldg[i].yellows + bldg[i].reds;
            const brokenRating = bldg[i].reds + 0.0 * (bldg[i].yellows);

            bldg[i].urgency = Math.trunc((100 *(brokenRating / total))) / 100;
            
        }

        function compare(lh, rh) {
            if(lh.urgency > rh.urgency) {
                return -1;
            }
            return 1;
        }

        bldg.sort(compare);


    }


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
                {buildings.map(bd => <WaterFountainRow building={bd} key={bd.id} />)}
            </tbody>
        </Table>
    );
}

export default Search;