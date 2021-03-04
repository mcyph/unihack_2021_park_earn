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

class HeatmapCartesian extends Component {
  constructor({ data, xAxisValues, yAxisValues, style }) {
    super({ data, xAxisValues, yAxisValues, style });
  }

  /*******************************************************************
   * HTML Rendering
   *******************************************************************/

  render() {
    let maxValue = -999999999999999;
    let minValue = +999999999999999;
    let data = this.props.data.map(function (item) {
        if (item[2] != null && item[2] > maxValue) {
          maxValue = item[2];
        }
        if (item[2] != null && item[2] < minValue) {
          minValue = item[2];
        }
        return [item[0], item[1], item[2] || '-'];
    });

    let options = {
        tooltip: {
            position: 'top'
        },
        xAxis: {
            type: 'category',
            data: this.props.xAxisValues,
            splitArea: {
                show: true
            }
        },
        yAxis: {
            type: 'category',
            data: this.props.yAxisValues,
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: minValue,
            max: maxValue,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
        },
        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                show: true
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    return <>
      <EChartsChart options={ options }
                    style={ this.props.style }/>
    </>;
  }
}

export default HeatmapCartesian;
