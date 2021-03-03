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

class FunnelChart extends Component {
  static SORT = {
    ASCENDING: 'ascending',
    DESCENDING: 'descending'
  };

  constructor({ data, title, sort, style }) {
    sort = sort || FunnelChart.SORT.DESCENDING;
    super({ data, title, sort, style });
  }

  /*******************************************************************
   * HTML Rendering
   *******************************************************************/

  render() {
    let options = {
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
          name: this.props.title,
          type: 'funnel',
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
          sort: this.props.sort,
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
          data: this.props.data.map(item => {
            return {name: item[0], value: item[1]};
          })
        }
      ]
    };
    return <>
      <EChartsChart options={ options }
                    style={ this.props.style }/>
    </>;
  }
}

export default FunnelChart;
