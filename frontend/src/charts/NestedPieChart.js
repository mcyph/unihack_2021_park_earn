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
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],
          label: {
            position: 'inner',
            fontSize: 14,
          },
          labelLine: {
            show: false
          },
          data: [
            {value: 1548, name: '搜索引擎'},
            {value: 775, name: '直达'},
            {value: 679, name: '营销广告', selected: true}
          ]
        },
        {
          name: '访问来源',
          type: 'pie',
          radius: ['45%', '60%'],
          labelLine: {
            length: 30,
          },
          label: {
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#F6F8FC',
            borderColor: '#8C8D8E',
            borderWidth: 1,
            borderRadius: 4,

            rich: {
                a: {
                    color: '#6E7079',
                    lineHeight: 22,
                    align: 'center'
                },
                hr: {
                    borderColor: '#8C8D8E',
                    width: '100%',
                    borderWidth: 1,
                    height: 0
                },
                b: {
                    color: '#4C5058',
                    fontSize: 14,
                    fontWeight: 'bold',
                    lineHeight: 33
                },
                per: {
                    color: '#fff',
                    backgroundColor: '#4C5058',
                    padding: [3, 4],
                    borderRadius: 4
                }
            }
          },
          data: [
            {value: 1048, name: '百度'},
            {value: 335, name: '直达'},
            {value: 310, name: '邮件营销'},
            {value: 251, name: '谷歌'},
            {value: 234, name: '联盟广告'},
            {value: 147, name: '必应'},
            {value: 135, name: '视频广告'},
            {value: 102, name: '其他'}
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
