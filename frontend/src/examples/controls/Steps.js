import Steps from "../../controls/steps/Steps";
import StepItem from "../../controls/steps/StepItem";

let _Steps=()=>{
  return <>
    <h2>Steps</h2>
    <p>
      <Steps>
        <StepItem href="#">Step 1</StepItem>
        <StepItem active={true}>Step 2</StepItem>
        <StepItem href="#">Step 3</StepItem>
      </Steps>
    </p>
  </>;
}

export default _Steps;
