import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import './Map.css';

const lat = 42.390208;
const long = -72.528271;
const center = [lat, long];

const markerOptions = {
  green: {
    fillColor: 'green',
    fillOpacity: 0.55,
    stroke: false
  },
  yellow: {
    fillColor: 'yellow',
    fillOpacity: 0.55,
    stroke: false
  },
  red: {
    fillColor: 'red',
    fillOpacity: 0.55,
    stroke: false
  }
}

// Test data, should probably be kept as a property
let markers = [{
    lat: 42.388482,
    long: -72.530341,
    color: 'green',
    text: 'Sycamore'
  }, {
    lat: 42.390208,
    long: -72.528271,
    color: 'yellow',
    text: 'Library'
  }, {
    lat: 42.390929,
    long: -72.525870,
    color: 'red',
    text: 'ILC'
  }
];

function Map() {
  return (
    <MapContainer center={center} zoom={15} scrollWheelZoom={true} className="Map">
    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {markers.map(marker => {
      return (
        <CircleMarker center={[marker.lat, marker.long]} pathOptions={markerOptions[marker.color]} radius={25}>
          <Popup>{marker.text}</Popup>
        </CircleMarker>
      );
    })}
    </MapContainer>
  );
}

export default Map;
