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


class BorderLinePolyLayer {
  /**
   * Create a new layer showing polygon outlines
   *
   * @param map a MapBox GL instance
   * @param uniqueId a unique identifier for the MapBox layer
   * @param color the color as a rgba/rgb/#xxx etc value.
   *              defaults to black
   * @param lineWidth the line width as a float. sometimes useful to have
   *                  this as 0.5 for very packed schemas such as postcodes.
   *                  defaults to 1.0
   * @param mapBoxSourceId a MapBoxSource ID, either for cases or underlays
   */
  constructor(map, uniqueId, color, lineWidth, mapBoxSourceId, addBeforeLayer) {
    this.map = map;
    this.uniqueId = uniqueId;
    this.color = color;
    this.lineWidth = lineWidth;
    this.mapBoxSourceId = mapBoxSourceId;
    this.addBeforeLayer = addBeforeLayer;
    this.__addLayer();
  }

  __addLayer() {
    // Add the line outline
    const map = this.map;

    map.addLayer({
      id: this.uniqueId,
      type: 'line',
      source: this.mapBoxSourceId,
      paint: {
        'line-color': this.color || '#000',
        'line-opacity': 1,
        'line-width': this.lineWidth || 0.5
      }
    }, this.addBeforeLayer);
    this.__shown = true;
  }

  /*******************************************************************
   * Line poly
   *******************************************************************/

  /**
   * Hide the polygon outlines
   */
  removeLayer() {
    if (this.__shown) {
      const map = this.map;
      map.removeLayer(this.uniqueId);
      this.__shown = false;
    }
  }
}

export default BorderLinePolyLayer;
