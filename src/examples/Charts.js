import BasicPieChart from "../charts/BasicPieChart";
import BasicLineChart from "../charts/BasicLineChart";
import BasicBarChart from "../charts/BasicBarChart";
import EChartsChart from "../charts/EChartsChart";
import NestedPieChart from "../charts/NestedPieChart";
import BoxPlotChart from "../charts/BoxPlotChart";
import CandlestickChart from "../charts/CandlestickChart";
import FunnelChart from "../charts/FunnelChart";
import GaugeChart from "../charts/GaugeChart";
import HeatmapCartesian from "../charts/HeatmapCartesian";
import SankeyChart from "../charts/SankeyChart";
import ScatterPlot from "../charts/ScatterPlot";
import SunburstChart from "../charts/SunburstChart";
import TreeMap from "../charts/TreeMap";

let Charts=()=>{
  return <>
    <BasicBarChart data={[["plot 1", [["apple", 10], ["pear", 15], ["banana", 5]]],
                          ["plot 2", [["apple", 10], ["pear", 15], ["banana", 5]]],
                          ["plot 3", [["apple", 10], ["pear", 15], ["banana", 5]]]]}
                   xAxisType={ BasicBarChart.AXIS_TYPE.CATEGORY }
                   yAxisType={ BasicBarChart.AXIS_TYPE.VALUE }
                   stack={ "blah" }
                   style={{ height: "50vh" }}/>
    <BasicLineChart data={[["test", [[0, 10], [1, 15], [2, 5]]]]}
                    xAxisType={ BasicLineChart.AXIS_TYPE.VALUE }
                    yAxisType={ BasicLineChart.AXIS_TYPE.VALUE }
                    stack={ true }
                    filledArea={ true }
                    style={{ height: "50vh" }}/>
    <BasicPieChart data={ [['apple', 30], ['orange', 60], ['pear', 10]] }
                   sort={ BasicPieChart.SORT.ASCENDING }
                   style={{ height: "50vh" }}/>
    <NestedPieChart innerData={[['Fruit', 50], ['Vegetable', 50]]}
                    outerData={[['Watermelon', 25], ['Banana', 25],
                                ['Carrot', 25], ['Celery', 25]]}
                    innerName="Category"
                    outerName="Food"
                    style={{ height: "50vh" }}/>
    <BoxPlotChart style={{ height: "70vh" }}/>
    <CandlestickChart style={{ height: "50vh" }}/>
    <FunnelChart data={[['apple', 60], ['banana', 40], ['cherry', 20],
                        ['orange', 80], ['pear', 100]]}
                 sort={ FunnelChart.SORT.ASCENDING }
                 style={{ height: "50vh" }}/>
    <GaugeChart value={ 50 }
                style={{ height: "30vh" }}/>
    <HeatmapCartesian
        data={[[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],
          [0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],
          [0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],
          [0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],
          [1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],
          [1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],
          [1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],
          [1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],
          [2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],
          [2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],
          [2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],
          [3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],
          [3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],
          [3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],
          [3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],
          [4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],
          [4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],
          [4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],
          [4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],
          [5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],
          [5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],
          [5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],
          [6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],
          [6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],
          [6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],
          [6,20,1],[6,21,2],[6,22,2],[6,23,6]]}
        style={{ height: "70vh" }}/>
    <SankeyChart

      style={{ height: "30vh" }}/>
    <ScatterPlot
      data={ [
        // TODO!
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.20],
        [11.5, 7.20],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68]
      ] }
      symbolSize={ 20 }
      style={{ height: "50vh" }}/>
    <SunburstChart style={{ height: "60vh" }}>
      <SunburstChart.Item name={'parent 1'} value={10}>
        <SunburstChart.Item name={'parent 1>child 1'} value={4}/>
        <SunburstChart.Item name={'parent 1>child 2'} value={6}/>
      </SunburstChart.Item>
      <SunburstChart.Item name={'parent 2'} value={20}>
        <SunburstChart.Item name={'parent 2>child 3'} value={20}>
          <SunburstChart.Item name={'child 3>child'} value={20}/>
        </SunburstChart.Item>
      </SunburstChart.Item>
    </SunburstChart>
    <TreeMap style={{ height: "30vh" }}>
      <TreeMap.Item name={'parent 1'} value={10}>
        <TreeMap.Item name={'parent 1>child 1'} value={4}/>
        <TreeMap.Item name={'parent 1>child 2'} value={6}/>
      </TreeMap.Item>
      <TreeMap.Item name={'parent 2'} value={20}>
        <TreeMap.Item name={'parent 2>child 3'} value={20}>
          <TreeMap.Item name={'child 3>child'} value={20}/>
        </TreeMap.Item>
      </TreeMap.Item>
    </TreeMap>
  </>;
}

export default Charts;
