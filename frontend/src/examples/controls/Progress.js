import Progress from "../../controls/progress/Progress";
import ProgressBar from "../../controls/progress/ProgressBar";

let _Progress=()=>{
  return <>
    <h2>Progress Indicators</h2>
    <h3>Progress</h3>
    <p>
      <Progress value={50} max={100} />
    </p>
    <hr/>

    <h3>Progress Bar</h3>
    <p>
      <ProgressBar value={50} min={0} max={100} />
    </p>
  </>;
}

export default _Progress;
