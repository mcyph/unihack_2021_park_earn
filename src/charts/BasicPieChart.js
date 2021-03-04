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

class BasicPieChart extends Component {
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

  constructor({ data, sort, rotate, style }) {
    if (!sort) {
      sort = BasicPieChart.SORT.NO_SORT;
    }
    if (rotate == null) {
      rotate = BasicPieChart.ROTATE.RADIAL;
    }
    super({ data, sort, rotate, style });
  }

  render() {
    let data = this.props.data.map(item => {
      return {name: item[0], value: item[1]}
    })
    if (this.props.sort === BasicPieChart.SORT.DESCENDING) {
      data.sort((a, b) => (a.value > b.value) ? 1 : -1)
    }
    else if (this.props.sort === BasicPieChart.SORT.ASCENDING) {
      data.sort((a, b) => (b.value > a.value) ? 1 : -1)
    }

    let option = {
      tooltip: {
        trigger: 'item'
      },
      /*legend: {
        orient: 'vertical',
        left: 'left',
      },*/
      series: [
        {
          type: 'pie',
          radius: '80%',
          sort: this.props.sort,
          label: {
            formatter: '{b} {d}%'
          },
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ],

      aria: {
        enabled: true,
        decal: {
          show: true
        }
      }
    };
    return <EChartsChart options={ option }
                         style={ this.props.style } />
  }
}

export default BasicPieChart;
