import React, { useEffect, useState } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Icon } from 'ol/style';

const OpenLayersMap = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const initialMap = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png', // Neutral tile layer
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([-123.1207, 49.2827]), // Center to Vancouver coordinates
        zoom: 14, // Initial zoom level to match the street-level view
      }),
    });

    setMap(initialMap);

    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const userCoords = fromLonLat([longitude, latitude]);

        // Center the map on the user's location
        initialMap.getView().setCenter(userCoords);
        initialMap.getView().setZoom(14);

        // Add a marker at the user's location
        const userLocation = new Feature({
          geometry: new Point(userCoords),
        });

        const markerStyle = new Style({
          image: new Icon({
            src: 'https://openlayers.org/en/latest/examples/data/icon.png', // URL for marker icon
            scale: 0.1,
          }),
        });

        userLocation.setStyle(markerStyle);

        const vectorSource = new VectorSource({
          features: [userLocation],
        });

        const markerLayer = new VectorLayer({
          source: vectorSource,
        });

        initialMap.addLayer(markerLayer);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }

    return () => {
      if (initialMap) {
        initialMap.setTarget(null);
      }
    };
  }, []);

  return (
    <div id="map" className="min-h-screen w-full max-w-[60%] bg-white relative"></div>
  );
};

export default OpenLayersMap;
