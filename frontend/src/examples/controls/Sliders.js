import Slider from "../../controls/forms/controls/sliders/Slider";

let Sliders=()=>{
  return <>
    <h2>Sliders</h2>
    <h3>Slider</h3>
    <p>
      <Slider min={50}
              max={100}
              value={50} />
    </p>
  </>;
}

export default Sliders;
