import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import './Map.css';
import { useEffect, useState } from 'react';
import { getApiUrl } from './api';

const lat = 42.390208;
const long = -72.528271;
const center = [lat, long];

const markerOptions = {
    GREEN: {
        fillColor: 'green',
        fillOpacity: 0.6,
        stroke: false
    },
    YELLOW: {
        fillColor: 'yellow',
        fillOpacity: 0.6,
        stroke: false
    },
    RED: {
        fillColor: 'red',
        fillOpacity: 0.6,
        stroke: false
    }
}

function Map() {
    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
        fetch(`${getApiUrl()}/building`)
            .then(response => response.json())
            .then(data => {
                setBuildings(data)
                console.log(buildings);
            })
            .catch(console.err);
    }, []);

    buildings.forEach(building => {
        building.statuses = {
            green: 0,
            yellow: 0,
            red: 0,
            total: 0
        }
        building.waterFountains.forEach(fountain => {
            if (fountain.status === "GREEN") {
                building.statuses.green++;
            } else if (fountain.status === "YELLOW") {
                building.statuses.yellow++;
            } else if (fountain.status === "RED") {
                building.statuses.red++;
            }
            building.statuses.total++;
        });

        if (building.statuses.red >= building.statuses.green && building.statuses.red >= building.statuses.yellow && building.statuses.total !== 0) {
            building.status = "RED";
        } else if (building.statuses.yellow >= building.statuses.green) {
            building.status = "YELLOW";
        } else {
            building.status = "GREEN";
        }

        building.radius = Math.min(Math.max(5 * building.statuses.total, 10), 50);
    });

    return (
        <MapContainer center={center} zoom={15} scrollWheelZoom={true} className="Map">
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {buildings.map(building => {
        return (
            <CircleMarker center={[building.latitude, building.longitude]} pathOptions={markerOptions[building.status]} radius={building.radius}>
                <Popup>{building.name}</Popup>
            </CircleMarker>
        );
        })}
        </MapContainer>
    );
}

export default Map;
