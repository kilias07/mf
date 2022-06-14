import {useEffect} from "react";
import { useMap } from 'react-leaflet';
import { GeoSearchControl } from 'leaflet-geosearch';
import {GoogleProvider} from "leaflet-geosearch";

export const SearchField = ({ apiKey }) => {
    const provider = new GoogleProvider({
        params: {
            key: apiKey,
            language: 'pl',
            region: 'pl',
        },
    });

    const searchControl = new GeoSearchControl({
        provider: provider,
        showMarker: false,
        style: "bar",
        searchLabel: 'Wpisz adres'
    });

    const map = useMap();
    useEffect(() => {
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, [map]);

    return null;
};