import React, { useState } from 'react';

import MultiLineText from "../../controls/forms/controls/text/MultiLineText";
import SingleLineText from "../../controls/forms/controls/text/SingleLineText";

let FormsTextControls=()=>{
  const [singleLineText, setSingleLineText] = useState("my text value");
  const [multiLineText, setMultiLineText] = useState("my text value");

  return <>
    <h2>Text Controls</h2>
    <h3>Multiline Text</h3>
    <p>
      <MultiLineText value={ multiLineText }
                     onChange={ newValue => {setMultiLineText(newValue);} }>
        Multi Line Text
      </MultiLineText>
    </p>
    <h3>Single Line Text</h3>
    <p>
      <SingleLineText value={ singleLineText }
                      onChange={ newValue => {setSingleLineText(newValue);} }>
        Single Line Text
      </SingleLineText>
    </p>
  </>;
}

export default FormsTextControls;
