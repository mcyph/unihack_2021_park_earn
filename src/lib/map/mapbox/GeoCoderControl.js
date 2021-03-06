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

class GeoCoderControl extends Component {
  constructor({ style }) {
    super({ style });
    this.geocoder = new MapboxGeocoder({
      // According to https://github.com/mapbox/mapbox-gl-geocoder,
      // POI results not allowed outside map under MapBox GL's terms of service
      types: 'district,place,locality,neighbourhood,address',
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    });
  }

  render=()=>{
    return <>
      <div ref={el => this.absContainer = el}
           style={{ position: "relative",
                    ...this.props.style }}>
        <div ref={el => this.coderContainer = el}
             style={this.props.style}/>
      </div>
    </>;
  }

  componentDidMount=()=> {
    this.__unmounted = false;
    this.geocoder.addTo(this.coderContainer);
  }

  componentWillUnmount=()=>{
    this.__unmounted = true;
  }
}

export default GeoCoderControl;
