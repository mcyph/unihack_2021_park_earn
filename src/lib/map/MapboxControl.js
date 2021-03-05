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

import "mapbox-gl/dist/mapbox-gl.css";
import React, { Component } from "react";

// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2ZW0xMTIyMzMiLCJhIjoiY2tsdzRwODkxMHRxOTJubjZnODRkOWlheiJ9.xUGfN07ebJ_McOeNcEvbUA';

class MapboxControl extends Component {
  static THEMES = {
    STREETS: 'mapbox://styles/mapbox/streets-v11',
    LIGHT: 'mapbox://styles/mapbox/light-v10',
    DARK: 'mapbox://styles/mapbox/dark-v10',
    OUTDOORS: 'mapbox://styles/mapbox/outdoors-v11',
    SATELLITE: 'mapbox://styles/mapbox/satellite-v9'
  };

  constructor({ mapboxStyle, style }) {
    mapboxStyle = mapboxStyle || MapboxControl.THEMES.OUTDOORS;
    super({ mapboxStyle, style });
    this.mapboxStyle = mapboxStyle;
    this.style = style;
  }

  render=()=>{
    return <>
      <div ref={el => this.absContainer = el}
           style={{ position: "relative",
                    ...this.props.style }}>
        <div ref={el => this.mapContainer = el}
             style={this.props.style}/>
      </div>
    </>;
  }

  componentDidMount=()=>{
    this.__unmounted = false;

    const map = this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: this.mapboxStyle,
      zoom: 1,
      maxZoom: 15.5,
      pitch: 0,

      //minZoom: 1,
      transition: {
        duration: 0,
        delay: 0
      },
      fadeDuration: 0
    });

    let runMeLater=async()=>{
      if (!this.mapContainer) {
        // Control probably destroyed in the interim!
        return;
      }

      // Disable map rotation
      map.dragRotate.disable();
      map.touchZoomRotate.disableRotation();

      // Add geolocate control to the map.
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
      );
      map.addControl(new mapboxgl.NavigationControl());
      map.addControl(new mapboxgl.FullscreenControl());

      let onLoad = () => {
        if (this.__unmounted) {
          //console.log("UNMOUNTED!!!")
          return;
        } else if (!map.loaded()) {
          // Sometimes the load event doesn't fire here due to
          // it being in an async function, so just keep polling!
          return setTimeout(onLoad, 20);
        }

        // Bind events for loading data
        map.on('move', () => {
          // TODO!
        });
        map.on('zoom', () => {
          // TODO!
        });
        map.on('moveend', () => {
          // TODO!
        });
        map.on('zoomstart', () => {
          // TODO!
        });
        map.on('zoomend', () => {
          // TODO!
        });
        map.on('click', ()=>{
          // TODO!
        });
      };
      onLoad();
    };
    runMeLater();
  }

  componentWillUnmount=()=>{
    this.__unmounted = true;
  }
}

export default MapboxControl;
