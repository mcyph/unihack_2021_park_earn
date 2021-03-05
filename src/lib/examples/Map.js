import React, { Component } from "react";
import MapboxControl from "../map/MapboxControl";
import GeoJSONData from "../map/mapbox/sources/GeoJSONData";

import parkingSensorData from "./On-street_Parking_Bay_Sensors.csv";
import worldPointData from "../../data/geojson/point/admin_0.json";
import readCSV from "../map/mapbox/sources/readCSV";
import Marker from "../map/mapbox/markers/Marker";

class Map extends Component {
  constructor({ }) {
    super({ });
  }

  render() {
    return <>
      <MapboxControl ref={el => {this.__mapboxControl = el;}}
                     style={{height: "50vh"}} />;
    </>
  }

  componentDidMount() {
    let geoJSONData = new GeoJSONData(GeoJSONData.POINTS, worldPointData);
    for (let sensor of readCSV(parkingSensorData)) {
      let lat = parseFloat(sensor['lat']);
      let long = parseFloat(sensor['long']);
      if (sensor['status'] === 'Unoccupied') {
        new Marker(this.__mapboxControl, '', geoJSONData)
      } else if (sensor['status'] === 'Present') {

      }
    }
    //geoJSONData.joinDataOnKey(csvData)
  }
}

export default Map;
