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
import cm from "./ColorManagement";

class NumbersStatLayer {
  /**
   * MapBox GL layers which show case numbers in red circles
   *
   * Also has a layer showing the region labels underneath
   *
   * @param map a MapBox GL instance
   * @param uniqueId a unique id for the MapBox GL layer
   * @param mapBoxSourceId
   * @param numbersGeoJSONKey
   */
  constructor(map, uniqueId, mapBoxSourceId, numbersGeoJSONKey) {
    this.map = map;
    this.uniqueId = uniqueId;
    this.mapBoxSourceId = mapBoxSourceId;
    this.numbersGeoJSONKey = numbersGeoJSONKey;
    this.__addLayer();
  }

  __addLayer() {
    if (this.__shown) {
      return;
    }
    let map = this.map;

    // Add the cases number layer
    map.addLayer({
      id: this.uniqueId+'label',
      type: 'symbol',
      maxzoom: 14,
      source: this.mapBoxSourceId,
      layout: {
        'text-field': `{${this.numbersGeoJSONKey}}`,
        'text-font': [
          'Arial Unicode MS Bold',
          'Open Sans Bold',
          'DIN Offc Pro Medium'
        ],
        'text-size': 13,
        //'text-allow-overlap': true,
        //'symbol-sort-key': ["get", "cases"]
      },
      paint: {
        "text-color": cm.getCaseTextColor('casesNumber').toString()
      }
    });
    this.__shown = true;
  }

  /*******************************************************************
   * Heat maps
   *******************************************************************/

  /**
   * Remove the cases layer
   */
  removeLayer() {
    if (this.__shown) {
      const map = this.map;
      map.removeLayer(this.uniqueId + 'label');
      this.__shown = false;
    }
  }
}

export default NumbersStatLayer;
