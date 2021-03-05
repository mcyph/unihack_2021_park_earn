import React, { useState } from 'react';

import Checkbox from "../../controls/forms/controls/toggle/Checkbox";
import ToggleSwitch from "../../controls/forms/controls/toggle/ToggleSwitch";

let FormsToggleControls=()=>{
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [toggleSwitch1, setToggleSwitch1] = useState(false);
  const [toggleSwitch2, setToggleSwitch2] = useState(true);

  return <>
    <h2>Toggle Controls</h2>
    <h3>Checkbox</h3>
    <p>
      <Checkbox value={ checkbox1 }
                onChange={ newValue => {setCheckbox1(newValue)} }>
        Checkbox 1
      </Checkbox>
      <Checkbox value={ checkbox2 }
                onChange={ newValue => {setCheckbox2(newValue)} }>
        Checkbox 2
      </Checkbox>
    </p>
    <h3>Toggle Switch</h3>
    <p>
      <ToggleSwitch value={ toggleSwitch1 }
                    onChange={ newValue => {setToggleSwitch1(newValue)} }>
        Toggle Switch 1
      </ToggleSwitch>
      <ToggleSwitch value={ toggleSwitch2 }
                    onChange={ newValue => {setToggleSwitch2(newValue)} }>
        Toggle Switch 2
      </ToggleSwitch>
    </p>
  </>;
}

export default FormsToggleControls;
