import {useEffect, useState} from "react";
import {Marker, Popup, useMap} from "react-leaflet";

export function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getScaleZoom(9,7));
            const radius = e.accuracy;
            const circle = L.circle(e.latlng, radius);
            circle.addTo(map);
        });
    }, [map]);


    return position === null ? null : (
        <Marker position={position}>
            <Popup>
                Tu jesteś. <br />
            </Popup>
        </Marker>
    );
}