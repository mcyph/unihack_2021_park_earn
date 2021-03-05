class SourceBase {
  static POINTS = 0;
  static POLYGON = 1;

  constructor(type, jsonData, latKey, longKey) {
    this.type = type;
    this.jsonData = jsonData;
    this.latKey = latKey;
    this.longKey = longKey;
    this.__geoJSON = this.__postProcess(this.__getGeoJSON());
  }
  __postProcess() {
    // TODO: Add the area of each polygon, and make it so it's grouped by e.g. state, country etc
  }
  getGeoJSON() {

  }
  getAllValues(valueKey) {
    let r = [];
    for (let value of this.__geoJSON[FIXME]) {
      let props = value.properties;
      r.push(props[this.valueKey]);
    }
  }
}