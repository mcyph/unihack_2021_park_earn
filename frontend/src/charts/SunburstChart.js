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


class SunburstItem extends Component {
  constructor({ name, value, children }) {
    super({ name, value, children });
  }
  render() {
    return null;
  }
}


class SunburstChart extends Component {
  static Item = SunburstItem;

  constructor({ style }) {
    super({ style });
  }

  /*******************************************************************
   * HTML Rendering
   *******************************************************************/

  render() {
    let options = {
      series: {
        type: 'sunburst',
        // emphasis: {
        //     focus: 'ancestor'
        // },
        data: React.Children.map(this.props.children, child => this.__getData(child)),
        radius: [0, '90%'],
        label: {
          rotate: 'radial'
        }
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
      children: React.Children.map(child.props.children, child => this.__getData(child))
    };
    if (!r.children || !r.children.length) {
      delete r.children;
    }
    return r;
  }
}

export default SunburstChart;
