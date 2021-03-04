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

import { Component } from "react";
import EChartsChart from "./EChartsChart";

class BasicBarChart extends Component {
  static AXIS_TYPE = {
    VALUE: 'value',
    LOG: 'float',
    CATEGORY: 'category',
    TIME: 'time'
  }

  constructor({ data, xAxisType, yAxisType, stack, style }) {
    super({ data, xAxisType, yAxisType, stack, style });
    this.state = {};
  }

  /*******************************************************************
   * HTML Rendering
   *******************************************************************/

  render() {
    let series = [];
    for (let [dataName, dataItem] of this.props.data) {
      series.push({
        name: dataName,
        type: 'bar',
        stack: this.props.stack,
        data: dataItem,
        symbol: 'roundRect',
        step: false,
      });
    }
    let options = {
      legend: {

      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      xAxis: {
        type: this.props.xAxisType
      },
      yAxis: {
        type: this.props.yAxisType
      },
      series: series,

      aria: {
        enabled: true,
        decal: {
          show: true
        }
      }
    };

    return <>
      <div>
        <EChartsChart
            ref={el => {this.reactEChart = el}}
            options={ options }

            style={ this.props.style }
        />
      </div>
    </>;
  }
}

export default BasicBarChart;
