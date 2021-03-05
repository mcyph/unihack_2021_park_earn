let __ID = 0;

class GeoJSONData {
  static POINTS = 0;
  static POLYGON = 1;

  constructor(type, jsonData) {
    this.type = type;
    this.jsonData = jsonData;
    this.__sourceId = "__geojson_"+__ID++;
    this.__geoJSON = this.__postProcess(jsonData);
  }

  /**
   * TODO: Filter depending on whether points/polygons
   *       and convert MultiPolygons to Polygons!!
   * @private
   */
  __postProcess(jsonData) {

  }

  /**
   *
   * @param map
   */
  assignToMap(map) {
    this.removeFromMap();
    TODO;
    this.__map = map;
  }

  /**
   *
   */
  removeFromMap() {
    if (this.__map) {
      TODO;
      this.__sourceId = null;
      this.__map = null;
    }
  }

  /**
   *
   * @returns {*}
   */
  getSourceId() {
    return this.__sourceId;
  }

  /**
   *
   * @returns {*}
   */
  getGeoJSON() {
    return this.__geoJSON;
  }

  /**
   *
   * @param valueKey
   * @param filter
   * @returns {[]}
   */
  getAllValues(valueKey, filter) {
    let r = [];
    for (let value of this.__geoJSON["features"]) {
      let props = value.properties;
      if (filter && !filter(props)) {
        continue;
      }
      r.push(props[valueKey]);
    }
    return r;
  }

  /**
   *
   * @param data
   * @param sourceKey
   * @param geoDataKey
   * @param filter
   * @param normalizeSource
   */
  joinDataOnKey(data, sourceKey, geoDataKey, filter, normalizeSource) {
    let assign = {}
    for (let item of data) {
      if (normalizeSource) {
        assign[normalizeSource(item[sourceKey])] = item;
      }
      else {
        assign[item[sourceKey]] = item;
      }
    }

    for (let item of this.__geoJSON["features"]) {
      let props = item.properties;
      if (!(geoDataKey in props) || !(props[geoDataKey] in assign)) {
        // Can't assign!
        continue;
      }
      else if (filter && !filter(props)) {
        // If a filter function specified and it returns
        // non-true values, don't set
        //
        // for instance, this might be useful when there are small
        // islands which also have the same country/state etc as
        // the bigger region
        continue;
      }
      for (let k in assign[props[geoDataKey]]) {
        props[k] = assign[props[geoDataKey]];
      }
    }
  }
}

export default GeoJSONData;
