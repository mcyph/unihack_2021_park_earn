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

class BasicLineChart extends Component {
    constructor({ xData, xAxisType, yData, yAxisType, stack, style }) {
        super({ xData, xAxisType, yData, yAxisType, stack, style });
        this.state = {};
    }

    /*******************************************************************
     * HTML Rendering
     *******************************************************************/

    render() {
        if (!this.state.option) {
            return null;
        }

        return (
            <div>
                <ReactEchartsCore
                    theme={cm.getEChartsTheme()}
                    echarts={echarts}
                    ref={el => {this.reactEChart = el}}
                    option={this.state.option}
                    style={{
                        height: "50vh",
                        marginTop: '25px'
                    }}
                />
            </div>
        );
    }

    /*******************************************************************
     * Re-render methods
     *******************************************************************/

    setMode(mode) {
        this.__mode = mode;
        this.__updateSeriesData()
    }

    setCasesInst(casesData, regionType) {
        this.__casesData = casesData;
        this.__regionType = regionType;
        this.__updateSeriesData()
    }

    /*******************************************************************
     * Get chart data
     *******************************************************************/

    __updateSeriesData() {
        if (!this.__casesData) {
            return;
        }

        let data = {},
            series = [],
            allDates = new Set();

        for (let [x, y] of FIXME) {
            series.push({
                name: ageRange,
                type: this.__mode === 'percentiles' ? 'line' : 'bar',
                areaStyle: this.__mode === 'percentiles' ? {} : null,
                stack: 'one',
                data: data[ageRange],
                symbol: 'roundRect',
                step: false,
            });
        }

        this.setState({
            option: {
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
                grid: {
                    top: 50,
                    left: '3%',
                    right: '4%',
                    bottom: 50,
                    containLabel: true
                },
                xAxis: {
                    type: 'time', // CHECK ME!
                    boundaryGap: false
                },
                yAxis: {
                    type: 'value'
                },
                series: series
            }
        });
    }
}

export default BasicLineChart;
