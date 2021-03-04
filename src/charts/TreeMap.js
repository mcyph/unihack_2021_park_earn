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

import React from "react";
import { Component } from "react";
import EChartsChart from "./EChartsChart";
import Color from "color";


class TreeMapItem extends Component {
  constructor({ name, value, color, children }) {
    children = children || [];
    super({ name, value, color, children });
  }
  render() {
    return null;
  }
}


class TreeMap extends Component {
  static Item = TreeMapItem;

  constructor({ style, children }) {
    super({ style, children });
  }

  /*******************************************************************
   * HTML Rendering
   *******************************************************************/

  render() {
    let options = {
      series: [{
        type: 'treemap',
        label: {
          show: true,
          color: 'black',
          borderColor: 'white'
        },
        upperLabel: {
          show: true,
          height: 30,
          color: 'white'
        },
        visibleMin: 500,
        levels: [
          {
            itemStyle: {
              borderColor: '#777',
              borderWidth: 0,
              gapWidth: 1,
            },
            upperLabel: {
              show: false
            }
          },
          {
            itemStyle: {
              borderColor: '#555',
              borderWidth: 5,
              gapWidth: 1
            },
            emphasis: {
              itemStyle: {
                borderColor: '#ddd'
              }
            }
          },
          {
            colorSaturation: [0.35, 0.5],
            itemStyle: {
              borderWidth: 5,
              gapWidth: 1,
              borderColorSaturation: 0.6,
            }
          }
        ],
        data: React.Children.map(this.props.children, child => this.__getData(child))
      }]
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
      label: {
        show: true,
        color: child.props.color ? (Color(child.props.color).isLight() ? 'black' : 'white') : null,
        shadowColor: child.props.color ? (Color(child.props.color).isLight() ? 'white' : 'black') : null,
        shadowBlur: 5
      },
      itemStyle: {color: child.props.color},
      children: React.Children.map(child.props.children, child => this.__getData(child))
    };
    if (!r.children || !r.children.length) {
      delete r.children;
    }
    return r;
  }
}

export default TreeMap;
