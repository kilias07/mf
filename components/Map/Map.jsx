import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {sanityClient} from "../../lib/sanity";
import L from "leaflet";
import {useEffect, useRef, useState} from "react";
import {LocationMarker} from "./CurrentPosition";
import {SearchField} from "./Search";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import 'leaflet-geosearch/dist/geosearch.css';

const coordsQuery = `*[_type == "geoPoints"]{
  "objectID":_id,
  _rev,
  title,
  location,
  address[][0]{
    cityName,
    postalCode,
    streetName
  }
}`;


const Map = () => {

    const GetIcon = new L.Icon({
        iconUrl: "/assets/images/location-marker-1.png",
        // iconRetinaUrl: markerMF,
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        // iconSize: new L.Point(60, 75),
        // className: 'leaflet-div-icon'
    })

    const mapRef = useRef();
    const [coords, setCoords] = useState([]);

    useEffect(() => {
        const {current} = mapRef;
        sanityClient.fetch(coordsQuery)
            .then(data => setCoords(data))
            .catch(e => console.log(e))
    }, []);


    return (
        <MapContainer
            ref={mapRef}
            center={[52, 20]}
            zoom={6.5}
            scrollWheelZoom={false}
            style={{height: "100%", width: "100%"}}>
            <LocationMarker/>

            <TileLayer
                url={`https://api.mapbox.com/styles/v1/kilias07/cl4a1m4zm001715mb1ra8eg3s/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2lsaWFzMDciLCJhIjoiY2w0M3QwZzNrMWt1azNqcXlzeG1jOWxuNSJ9.hTM49Z7VQ7DChxRiD3nNDQ`}
                attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
            />
            <SearchField apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP}/>
            {coords.length > 0 && coords.map(marker => (
                <Marker position={[marker.location.lat, marker.location.lng]}
                        animate={true}
                        key={marker.objectID}
                        icon={GetIcon}
                >
                    <Popup>
                        <p className="font-bold">{marker.title}</p>
                        <span>{marker.address.cityName}, </span>
                        <span>{marker.address.postalCode},<br /></span>
                        <span>{marker.address.streetName}</span>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
