
/**
This file is licensed under the MIT license

Copyright (c) 2021 David Morrissey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

import React from "react";
import Form from "../Form";
import utility from "../__utility";

let __NAME_ID = 0;

class RadioGroup extends React.Component {
  /**
   *
   * @param options
   * @param selectedOption
   * @param name
   * @param style
   */
  constructor({ name, options, value, onChange, inline, validator, style }) {
    if (typeof value === "string") {
      value = options.indexOf(value);
    }
    if (value == null || value === -1) {
      value = 0;
    }
    if (!name) {
      name = '__radio_'+__NAME_ID++;
    }
    super({ name, options, value, onChange, inline, validator, style });
  }

  render=()=> {
    return <Form.FormContext.Consumer>{ form => {
      let selectedValue = utility.getValue(form, this.props.value);

      let out = [];

      for (let option of this.options) {
        let value, text;

        if (option instanceof "string") {
          value = text = option;
        } else if (utility.isArray(option)) {
          [value, text] = option;
        } else if (utility.isLiteralObject(option)) {
          value = option.value;
          text = option.text || option.html || option.content;
        } else {
          throw new Error("Unable to process radio option: "+option);
        }

        out.push(<>
          <label className={ this.props.inline ? "form-radio form-inline"
                                               : "form-radio" }
                 style={ this.style }>
            <input type="radio"
                   name={ this.props.name }
                   value={ value }
                   onClick={() => {
                     return utility.onChange(form, this.props.onChange, this.props.name,
                         value);
                   }}
                   { ...(value === selectedValue ? {checked: true} : {}) } />
            <i className="form-icon" /> { text }
          </label>
        </>);
      }
      return out;
    } }</Form.FormContext.Consumer>;
  }
}

export default RadioGroup;
