import React, { useState } from 'react';

import Button from "../../controls/forms/controls/Button";
import ButtonGroup from "../../controls/forms/ButtonGroup";
import Checkbox from "../../controls/forms/controls/toggle/Checkbox";
import MultiLineText from "../../controls/forms/controls/text/MultiLineText";
import RadioGroup from "../../controls/forms/controls/options/RadioGroup";
import Select from "../../controls/forms/controls/options/Select";
import SingleLineText from "../../controls/forms/controls/text/SingleLineText";
import ToggleSwitch from "../../controls/forms/controls/toggle/ToggleSwitch";

let Forms = ()=>{
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [toggleSwitch1, setToggleSwitch1] = useState(false);
  const [toggleSwitch2, setToggleSwitch2] = useState(true);
  const [radioGroup, setRadioGroup] = useState("oranges");
  const [select, setSelect] = useState("apples");

  return <>
    <h1>Forms</h1>

    <h2>Buttons</h2>
    <h3>Standard Button</h3>
    <p>
      <Button>Default Button</Button>
      <Button color={ Button.COLOR.PRIMARY }>Button (Primary Color)</Button>
      <Button color={ Button.COLOR.SUCCESS }>Button (Success)</Button>
      <Button color={ Button.COLOR.ERROR }>Button (Error)</Button>
    </p>
    <p>
      <Button borderStyle={ Button.BORDER_STYLE.CIRCLE }>Circled Button</Button>
      <Button borderStyle={ Button.BORDER_STYLE.FAB }>FAB Button</Button>
      <Button borderStyle={ Button.BORDER_STYLE.LINK }>Link Button</Button>
    </p>
    <p>
      <Button state={ Button.STATE.ACTIVE }>Active Button</Button>
      <Button state={ Button.STATE.DISABLED }>Disabled Button</Button>
      <Button state={ Button.STATE.LOADING }>Loading Button</Button>
    </p>
    <p>
      <Button size={ Button.SIZE.SMALL }>Small Button</Button>
      <Button size={ Button.SIZE.LARGE }>Large Button</Button>
    </p>
    <h3>Button Group</h3>
    <p>
      <ButtonGroup>
        <Button>Grouped Button 1</Button>
        <Button>Grouped Button 2</Button>
        <Button color={ Button.COLOR.PRIMARY }>Grouped Button 3</Button>
      </ButtonGroup>
    </p>

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

    <h2>Text Controls</h2>
    <h3>Multiline Text</h3>
    <p>
      <MultiLineText value="my value">Multi Line Text</MultiLineText>
    </p>
    <h3>Single Line Text</h3>
    <p>
      <SingleLineText value="my value">Single Line Text</SingleLineText>
    </p>
  </>
};

export default Forms;
