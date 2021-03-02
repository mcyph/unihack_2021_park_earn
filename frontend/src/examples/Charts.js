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
    <BasicBarChart data={[["test", [[0, 10], [1, 15], [2, 5]]]]}
                   xAxisType={ BasicBarChart.AXIS_TYPE.NUMBER }
                   yAxisType={ BasicBarChart.AXIS_TYPE.NUMBER }
                   stack={true}
                   style={{ height: "30vh" }}/>
    <BasicLineChart data={[["test", [[0, 10], [1, 15], [2, 5]]]]}
                    xAxisType={ BasicBarChart.AXIS_TYPE.NUMBER }
                    yAxisType={ BasicBarChart.AXIS_TYPE.NUMBER }
                    stack={true}
                    filledArea={true}
                    style={{ height: "30vh" }}/>
    <NestedPieChart style={{ height: "30vh" }}/>
    <BoxPlotChart style={{ height: "30vh" }}/>
    <CandlestickChart style={{ height: "30vh" }}/>
    <FunnelChart style={{ height: "30vh" }}/>
    <GaugeChart style={{ height: "30vh" }}/>
    <HeatmapCartesian style={{ height: "30vh" }}/>
    <SankeyChart style={{ height: "30vh" }}/>
    <ScatterPlot style={{ height: "30vh" }}/>
    <SunburstChart style={{ height: "30vh" }}/>
    <TreeMap style={{ height: "30vh" }}/>
  </>;
}

export default Charts;
