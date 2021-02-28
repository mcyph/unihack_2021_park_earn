import BasicPieChart from "../charts/BasicPieChart";
import BasicLineChart from "../charts/BasicLineChart";
import BasicBarChart from "../charts/BasicBarChart";
import EChartsChart from "../charts/EChartsChart";

function charts() {
  return <>
    <BasicBarChart></BasicBarChart>
    <BasicLineChart></BasicLineChart>
    <BasicPieChart></BasicPieChart>
    <EChartsChart></EChartsChart>
  </>;
}

export default charts;
