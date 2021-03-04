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

import React, { Component } from "react";
import Form from "../../Form";
import utility from "../../__utility";

class Select extends Component {
  /**
   *
   * @param name
   * @param options
   * @param value
   * @param onChange
   * @param inline
   * @param validator
   * @param style
   */
  constructor({ name, options, value, onChange,
                inline, validator, style }) {
    super({ name, options, value, onChange,
            inline, validator, style });
  }

  render() {
    let that = this;

    return <Form.FormContext.Consumer>{ context => {
      let selectedValue = utility.getValue(context, that.props.value);
      let out = [];

      for (let option of that.props.options) {
        let value, text;

        if (typeof option === "string") {
          value = text = option;
        } else if (utility.isArray(option)) {
          [value, text] = option;
        } else if (utility.isLiteralObject(option)) {
          value = option.value;
          text = option.text || option.html || option.content;
        } else {
          throw new Error("Unable to process radio option: "+option);
        }

        if (value === selectedValue) {
          out.push(<option value={ value } selected>{ text }</option>);
        } else {
          out.push(<option value={ value }>{ text }</option>);
        }
      }
      return <>
        <select className={ that.props.inline ? "form-select form-inline"
                                              : "form-select" }
                name={ that.props.name }
                ref={ el => {that.__select = el;} }
                onChange={() => {
                  let value = that.__select.options[that.__select.selectedIndex].value;
                  utility.onChange(context, that.props.onChange, that.props.name, value);
                }}
                style={ that.style }>
          { out }
        </select>
      </>;
    } }</Form.FormContext.Consumer>;
  }
}

export default Select;
