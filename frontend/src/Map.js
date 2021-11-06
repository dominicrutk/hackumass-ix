import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import './Map.css';

const lat = 42.390208;
const long = -72.528271;

const greenOptions = {
  fillColor: 'green',
  fillOpacity: 0.55,
  stroke: false
};
const yellowOptions = {
  fillColor: 'yellow',
  fillOpacity: 0.55,
  stroke: false
};
const redOptions = {
  fillColor: 'red',
  fillOpacity: 0.55,
  stroke: false
};
const center = [lat, long];

function Map() {
  return (
    <MapContainer center={center} zoom={15.5} scrollWheelZoom={true} className="Map">
    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <CircleMarker center={center} pathOptions={greenOptions} radius={25}>
      <Popup>Test popup comment</Popup>
    </CircleMarker>
    </MapContainer>
  );
}

export default Map;
