
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
import Form from "../../Form";
import utility from "../../__utility";

class Checkbox extends Component {
  /**
   *
   * @param name
   * @param value
   * @param onChange
   * @param inline
   * @param validator
   * @param style
   * @param children
   */
  constructor({ name, value, onChange,
                inline, validator, style, children }) {
    super({ name, value, onChange,
            inline, validator, style, children });
  }

  render() {
    return <Form.FormContext.Consumer>{ context => {
      let value = utility.getValue(context, this.props.value);
      return <>
        <label className={ this.props.inline ? "form-checkbox form-inline"
                                             : "form-checkbox" }>
          <input type="checkbox"
                 name={ this.props.name }
                 { ...(value ? {checked: "checked"} : {}) }
                 ref={el => {this.__checkbox = el;}}
                 onChange={() => {
                   let value = !!this.__checkbox.checked;
                   utility.onChange(context, this.props.onChange, this.props.name, value);
                 }}/>
          <i className="form-icon"/>
          { this.props.children && this.props.children }
        </label>
      </>;
    } }</Form.FormContext.Consumer>;
  }
}

export default Checkbox;
