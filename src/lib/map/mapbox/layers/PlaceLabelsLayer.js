/**
This file is licensed under the MIT license

Copyright (c) 2020 David Morrissey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
import getMapBoxCaseColors from "../getMapBoxCaseColors";
import cm from "../ColorManagement";

class PlaceLabelsLayer {
  constructor(map, uniqueId, mapboxSourceId, placeGeoJSONKey) {
    this.map = map.map || map;
    this.uniqueId = uniqueId;
    this.mapboxSourceId = mapboxSourceId;
    this.placeGeoJSONKey = placeGeoJSONKey;
    this.__addLayer();
  }

  __addLayer() {
    if (this.__shown) {
      return;
    }
    this.__addCityLabel();
    this.__shown = true;
  }

  __addCityLabel() {
    let layerId = this.uniqueId + 'citylabel';
    let options = {
      'id': layerId,
      'type': 'symbol',
      'maxzoom': 14,
      'source': this.mapboxSourceId,
      'layout': {
        'text-field': [
          'format',
          ['get', this.placeGeoJSONKey],
          {'font-scale': 0.7},
        ],
        'text-transform': 'lowercase',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.75],
        'text-anchor': 'top',
        'text-allow-overlap': true,
        //'symbol-sort-key': ["get", "cases"]
      },
      'paint': {
        'text-halo-width': 1.3,
        'text-halo-blur': 0.5,
        //"text-opacity-transition": {duration: FADE_TRANSITION_DURATION},
      }
    };
    this.map.addLayer(options);
  }

  updateLayer(allValues) {
    let startOpacity = 1.0;  // HACK!

    let textColor = getMapBoxCaseColors(
      cm.getCaseTextColor('area').setAlpha(startOpacity),
      cm.getCaseTextColor('area'),
      cm.getCaseTextColor('area'),
      cm.getCaseTextColor('area'),
      cm.getCaseTextColor('area').setAlpha(startOpacity),
      cm.getCaseTextColor('area'),
      allValues, [0.0, 0.25, 0.75, 0.90, 0.95], 1
    );
    let textHaloColor = getMapBoxCaseColors(
      cm.getCaseTextColor('areaHalo').setAlpha(startOpacity),
      cm.getCaseTextColor('areaHalo'),
      cm.getCaseTextColor('areaHalo'),
      cm.getCaseTextColor('areaHalo'),
      cm.getCaseTextColor('areaHalo').setAlpha(startOpacity),
      cm.getCaseTextColor('areaHalo'),
      allValues, [0.0, 0.25, 0.75, 0.90, 0.95], 1
    );
    let hoverRectangleColor = cm.getHoverRectangleColor().toString();

    this.map.setPaintProperty(
      this.uniqueId+'citylabel', 'text-color', [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        hoverRectangleColor,
        textColor
      ]
    );
    this.map.setPaintProperty(
      this.uniqueId+'citylabel', 'text-halo-color', textHaloColor
    );
    this.__shown = true;
  }

  removeLayer() {
    if (this.__shown) {
      const map = this.map;
      map.removeLayer(this.uniqueId + 'citylabel');
      this.__shown = false;
    }
  }
}

export default PlaceLabelsLayer;
