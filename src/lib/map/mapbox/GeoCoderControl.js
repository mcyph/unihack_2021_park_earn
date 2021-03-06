/**
This file is licensed under the MIT license

Copyright (c) 2021 David Morrissey

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

import React, { Component } from "react";

// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxGeocoder from '!mapbox-gl-geocoder';
// eslint-disable-next-line import/no-webpack-loader-syntax
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import MapboxControl from "../MapboxControl";

class GeoCoderControl extends Component {
  constructor({ onResults, onResultSelected, onLoading, style }) {
    super({ onResults, style });
    this.geocoder = new MapboxGeocoder({
      // According to https://github.com/mapbox/mapbox-gl-geocoder,
      // POI results not allowed outside map under MapBox GL's terms of service
      types: 'country,region,place,postcode,locality,neighborhood',
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    });

    if (onResults) {
      this.geocoder.on('results', onResults);
    }
    if (onResultSelected) {
      this.geocoder.on('result', onResultSelected);
    }
    if (onLoading) {
      this.geocoder.on('loading', onLoading);
    }
  }

  render=()=>{
    return <>
      <div ref={el => this.coderContainer = el}
           style={{
             zIndex: 1,
             width: "100%",
             ...this.props.style
           }} />
      <div style={{ opacity: 0, height: 0, width: 0 }}>
         <MapboxControl ref={el => {this.map = el ? el.map : null;}}
                        style={{height: "500px"}} />
       </div>
    </>;
  }

  componentDidMount=()=> {
    this.__unmounted = false;
    let callLater=()=> {
      if (this.map) {
        this.coderContainer.appendChild(this.geocoder.onAdd(this.map));
      } else {
        setTimeout(callLater, 300)
      }
    }
    callLater();
  }

  componentWillUnmount=()=>{
    this.__unmounted = true;
  }
}

export default GeoCoderControl;
