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

import mapboxgl from "maplibre-gl";

class Marker {
    constructor(map, imageURL, geoJSONData) {
      map = map.map || map;
      this.map = map;
      this.imageURL = imageURL;

      // add markers to map
      this.__markerElms = geoJSONData.getGeoJSON()['features'].map(function(marker) {
        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'mapbox-marker';
        el.style.backgroundImage = imageURL;

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      });
    }

    show() {
      for (let elm of this.__markerElms) {
        elm.style.display = 'block';
      }
    }

    hide() {
      for (let elm of this.__markerElms) {
        elm.style.display = 'none';
      }
    }
}

export default Marker;
