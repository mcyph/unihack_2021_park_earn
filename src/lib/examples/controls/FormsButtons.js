import React, { useState } from 'react';

import Button from "../../controls/forms/controls/Button";
import ButtonGroup from "../../controls/forms/ButtonGroup";

let Forms = ()=>{
  return <>
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
  </>
};

export default Forms;
