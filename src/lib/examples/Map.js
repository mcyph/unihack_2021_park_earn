import React, { Component } from "react";
import MapboxControl from "../map/MapboxControl";
import GeoJSONData from "../map/mapbox/sources/GeoJSONData";

import parkingSensorData from "./On-street_Parking_Bay_Sensors.csv";
import worldPointData from "../../data/geojson/point/admin_0.json";
import readCSV from "../map/mapbox/sources/readCSV";

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
    let csvData = readCSV(parkingSensorData);
    geoJSONData.joinDataOnKey()
  }
}

export default Map;
