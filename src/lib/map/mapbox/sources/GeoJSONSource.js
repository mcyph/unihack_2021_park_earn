class GeoJSONSource {
  constructor(type, geoJSONData, latKey, longKey) {
    this.geoJSONData = geoJSONData;
    this.latKey = latKey;
    this.longKey = longKey;
  }
  __getGeoJSON() {
    // TODO: Filter depending on whether points/polygons
    //       and convert MultiPolygons to Polygons!!
  }
}

export default GeoJSONSource;
