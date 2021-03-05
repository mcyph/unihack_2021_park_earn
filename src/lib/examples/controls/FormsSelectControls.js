import React, { useState } from 'react';

import RadioGroup from "../../controls/forms/controls/options/RadioGroup";
import Select from "../../controls/forms/controls/options/Select";

let FormsSelectControls=()=>{
  const [radioGroup, setRadioGroup] = useState("oranges");
  const [select, setSelect] = useState("apples");

  return <>
    <h2>Select a Value from Multiple</h2>
    <h3>Radio Group</h3>
    <p>
      <RadioGroup
        label="Fruit"
        value={ radioGroup }
        options={["apples", "oranges"]}
        onChange={ newValue => {setRadioGroup(newValue);} }
      />
    </p>
    <h3>Select</h3>
    <p>
      <Select
        label="Fruit"
        value={ select }
        options={["apples", "oranges"]}
        onChange={ newValue => {setSelect(newValue);} }
      />
    </p>
  </>;
}

export default FormsSelectControls;
