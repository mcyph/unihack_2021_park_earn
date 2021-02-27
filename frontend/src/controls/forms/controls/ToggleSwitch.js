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

import { Component } from "react";
import Form from "../Form";
import utility from "../__utility";

class ToggleSwitch extends Component {
  /**
   *
   * @param checked
   * @param onChange
   * @param style
   * @param children
   */
  constructor({ value, onChange, inline, name, style, children }) {
    super({ value, onChange, inline, name, style, children });
  }

  render() {
    return <Form.FormContext.Consumer>{ context => {
      let value = utility.getValue(context, this.props.value);

      return <>
        <label className={ this.props.inline ? "form-inline"
                                             : "form-switch" }>
          <input
            name={ this.props.name }
            { ...(value ? {checked: "checked"} : {}) }
            ref={el => {this.__checkbox = el;}}
            type="checkbox"
            onChange={() => {
              utility.onChange(context, this.props.onChange,
                  !!this.__checkbox.checked);
            }}
          />
          <i className="form-icon" />
          { this.props.children && this.props.children }
        </label>
      </>;
    } }</Form.FormContext.Consumer>;
  }
}

export default ToggleSwitch;
