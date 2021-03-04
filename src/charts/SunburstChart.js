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
import EChartsChart from "./EChartsChart";
import Color from "color";


class SunburstItem extends Component {
  constructor({ name, value, color, children }) {
    super({ name, value, color, children });
  }
  render() {
    return null;
  }
}


class SunburstChart extends Component {
  static Item = SunburstItem;
  static SORT = {
    NO_SORT: null,
    ASCENDING: 'asc',
    DESCENDING: 'desc'
  };
  static ROTATE = {
    NO_ROTATE: 0,
    RADIAL: 'radial',
    TANGENTIAL: 'tangential'
  }

  constructor({ sort, rotate, style }) {
    if (!sort) {
      sort = SunburstChart.SORT.NO_SORT;
    }
    if (rotate == null) {
      rotate = SunburstChart.ROTATE.RADIAL;
    }
    super({ sort, rotate, style });
  }

  /*******************************************************************
   * HTML Rendering
   *******************************************************************/

  render() {
    let options = {
      series: {
        type: 'sunburst',
        data: React.Children.map(this.props.children, child => this.__getData(child)),
        radius: [0, '90%'],
        sort: this.props.sort,
        label: {
          fontSize: "18",
          rotate: this.props.rotate,
          formatter: '{b}: {c}'
        },
      }
    };
    return <>
      <EChartsChart options={ options }
                    style={ this.props.style }/>
    </>;
  }

  __getData(child) {
    let r = {
      name: child.props.name,
      value: child.props.value,
      itemStyle: {
        color: child.props.color,
        borderColor: "#aaa",
      },
      color: child.props.color ? (Color(child.props.color).isLight() ? 'black' : 'white') : null,
      children: React.Children.map(child.props.children, child => this.__getData(child))
    };
    if (!r.children || !r.children.length) {
      delete r.children;
    }
    return r;
  }
}

export default SunburstChart;
