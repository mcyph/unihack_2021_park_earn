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
  constructor({ innerData, outerData, innerName, outerName, style }) {
    super({ innerData, outerData, innerName, outerName, style });
  }

  /*******************************************************************
   * HTML Rendering
   *******************************************************************/

  render() {
    // {value: 1548, name: '搜索引擎'},
    //             {value: 775, name: '直达'},
    //             {value: 679, name: '营销广告'}

    // [
    //             {value: 1048, name: '百度'},
    //             {value: 335, name: '直达'},
    //             {value: 310, name: '邮件营销'},
    //             {value: 251, name: '谷歌'},
    //             {value: 234, name: '联盟广告'},
    //             {value: 147, name: '必应'},
    //             {value: 135, name: '视频广告'},
    //             {value: 102, name: '其他'}
    //           ]

    // Maybe add legend back??
    let options = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: this.props.innerName,
          type: 'pie',
          radius: [0, '30%'],
          labelLine: {
            show: false
          },
          data: this.props.innerData.map(
            item => {return {value: item[1], name: item[0]}}
          )
        },
        {
          name: this.props.outerName,
          type: 'pie',
          radius: ['45%', '60%'],
          labelLine: {
            length: 30,
          },
          data: this.props.outerData.map(
            item => {return {value: item[1], name: item[0]}}
          )
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
