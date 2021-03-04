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

import getMapBoxCaseColors from "./getMapBoxCaseColors";
import cm from "./ColorManagement";

const FILL_OPACITY = 0.66;


class FillPolyLayer {
  /**
   * A transparent fill poly layer for
   * cases to allow for popup on click events
   *
   * @param map a MapBox GL instance
   * @param uniqueId a unique ID for the MapBox GL layer
   * @param mapBoxSource a MapBoxSource instance
   */
  constructor(map, uniqueId, mapBoxSourceId, addBeforeLayer) {
    this.map = map;
    this.uniqueId = uniqueId;
    this.mapBoxSourceId = mapBoxSourceId;

    // Add the colored fill area
    map.addLayer(
        {
          id: this.uniqueId+'fillpoly',
          type: 'fill',
          source: this.mapBoxSourceId,
          paint: {
            'fill-antialias': true,
            'fill-outline-color': [
              'case',
              ['boolean', ['feature-state', 'hover'], false],
              'rgba(0, 0, 0, 0.9)',
              'rgba(100, 100, 100, 0.4)'
            ],
            'fill-opacity': [
              'case',
              ['boolean', ['feature-state', 'hover'], false],
              0.6,
              FILL_OPACITY
            ]
          }
        },
        addBeforeLayer
    );
  }

  /**
   *
   * @returns {*}
   */
  getLayerId() {
    return this.uniqueId+'fillpoly';
  }

  /*******************************************************************
   * Fill poly
   *******************************************************************/

  /**
   * Add the (transparent) fill poly layer for
   * cases to allow for popup on click events
   */
  updateLayer(allValues) {
    let circleColor = getMapBoxCaseColors(
        cm.getCaseColorPositive(0.01).setAlpha(0.05),
        cm.getCaseColorPositive(1.0),
        cm.getCaseColorPositive(0),
        cm.getCaseColorMax(),
        cm.getCaseColorNegative(0.01).setAlpha(0.05),
        cm.getCaseColorNegative(1.0),
        allValues, [0.0, 0.25, 0.75, 0.90, 0.95], 1
    );

    console.log(JSON.stringify(circleColor));

    this.map.setPaintProperty(
        this.uniqueId + 'fillpoly', 'fill-color', [
          "interpolate", ["linear"], ["zoom"],
          13.0, circleColor,
          15.0, "rgba(0, 0, 0, 0)"
        ]
    );

    this.__shown = true;
  }

  /**
   * Remove the fill poly layer
   */
  removeLayer() {
    if (this.__shown) {
      const map = this.map;
      map.removeLayer(this.uniqueId + 'fillpoly');
      this.__shown = false;
    }
  }
}

export default FillPolyLayer;
