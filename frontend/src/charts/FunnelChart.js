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

class NestedPieChart extends Component {
  constructor({ data, xAxisType, yAxisType, stack, filledArea, style }) {
    super({ data, xAxisType, yAxisType, stack, filledArea, style });
  }

  /*******************************************************************
   * HTML Rendering
   *******************************************************************/

  render() {
    let options = {
        title: {
            text: '漏斗图',
            subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            data: ['展现','点击','访问','咨询','订单']
        },

        series: [
            {
                name:'漏斗图',
                type:'funnel',
                left: '10%',
                top: 60,
                //x2: 80,
                bottom: 60,
                width: '80%',
                // height: {totalHeight} - y - y2,
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    show: true,
                    position: 'inside'
                },
                labelLine: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        fontSize: 20
                    }
                },
                data: [
                    {value: 60, name: '访问'},
                    {value: 40, name: '咨询'},
                    {value: 20, name: '订单'},
                    {value: 80, name: '点击'},
                    {value: 100, name: '展现'}
                ]
            }
        ]
    };
    return <>
      <EChartsChart options={ options }
                    style={ this.props.style }/>
    </>;
  }
}

export default NestedPieChart;
