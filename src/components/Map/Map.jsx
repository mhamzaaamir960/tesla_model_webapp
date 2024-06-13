import React, { useEffect, useState, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import { Control, defaults as defaultControls } from "ol/control";
import { TbNavigationFilled } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { MdBolt, MdLocationOn } from "react-icons/md";

const OpenLayersMap = () => {
  const [map, setMap] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const searchContainerRef = useRef(null);

  useEffect(() => {
    // Initialize the map without a center initially
    const initialMap = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
      }),
      controls: defaultControls({ zoom: false }).extend([
        new Control({
          element: searchContainerRef.current,
        }),
      ]),
    });

    setMap(initialMap);

    // Geolocation to get the user's current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = [position.coords.longitude, position.coords.latitude];
          initialMap.getView().setCenter(fromLonLat(coords));
          initialMap.getView().setZoom(17);

          // Create a point feature for the marker at the user's location
          const userMarker = new Feature({
            geometry: new Point(fromLonLat(coords)),
          });

          const userMarkerStyle = new Style({
            image: new Icon({
              anchor: [0.5, 1],
              src: "https://openlayers.org/en/latest/examples/data/icon.png",
              scale: 0.1,
            }),
          });

          userMarker.setStyle(userMarkerStyle);

          const userVectorSource = new VectorSource({
            features: [userMarker],
          });

          const userVectorLayer = new VectorLayer({
            source: userVectorSource,
          });

          initialMap.addLayer(userVectorLayer);
        },
        (error) => {
          console.error("Error getting user's location:", error);
        },
        { enableHighAccuracy: true }
      );
    }

    return () => {
      if (initialMap) {
        initialMap.setTarget(null);
      }
    };
  }, []);

  const handleSearch = () => {
    if (!map || !searchQuery) return;

    // Use OpenLayers Geocoding API or other geocoding service
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}&accept-language=en` 
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const result = data[0];
          const coords = fromLonLat([
            parseFloat(result.lon),
            parseFloat(result.lat),
          ]);
          map.getView().animate({ center: coords, zoom: 17 });
        }
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const goToLocation = (coords) => {
    if (map) {
      map.getView().animate({ center: fromLonLat(coords), zoom: 17 });
    }
  };

  return (
    <div className="relative top-0 min-h-screen w-full bg-white">
      <div id="map" className="w-full h-full"></div>
      <div>
        <div className="flex items-center bg-gray-100 shadow p-5 rounded absolute top-28 left-10 z-10">
          <TbNavigationFilled className="text-2xl cursor-pointer" />
        </div>
        <div
          id="search-container"
          ref={searchContainerRef}
          className="absolute top-28 left-32 z-10 bg-gray-100 px-6 py-2 rounded shadow flex items-center gap-x-2"
        >
          <IoIosSearch className="text-3xl text-gray-600" />
          <input
            type="text"
            placeholder="Navigate"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="p-2 text-gray-600 text-2xl font-medium bg-inherit outline-none rounded"
          />
        </div>
      </div>

      <div className="absolute top-28 right-10 bg-gray-100 p-2 rounded flex flex-col gap-y-8 items-center py-4">
        <MdLocationOn
          className="text-black text-5xl cursor-pointer"
          onClick={() => goToLocation([-2.2426, 53.4808])}
        />
        <MdBolt
          className="text-3xl cursor-pointer bg-gray-500 text-white rounded-full"
          onClick={() => goToLocation([-0.1276, 51.5074])}
        />
      </div>
    </div>
  );
};

export default OpenLayersMap;
