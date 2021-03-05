import React, { useState } from 'react';

import Slider from "../../controls/forms/controls/sliders/Slider";

let FormsSliders=()=>{
  const [slider, setSlider] = useState(50);

  return <>
    <h2>Sliders</h2>
    <h3>Slider</h3>
    <p>
      <Slider min={0}
              max={100}
              value={slider}
              onChange={ newValue => {setSlider(newValue);} }/>
    </p>
  </>;
}

export default FormsSliders;
