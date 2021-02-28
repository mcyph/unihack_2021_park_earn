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

let __ID = 0;

class SingleLineText extends Component {
  /**
   *
   * @param name
   * @param value
   * @param onChange
   * @param placeholder
   * @param label
   * @param validator
   * @param indicateSuccess
   * @param style
   */
  constructor({ name, value, onChange,
                placeholder, validator, indicateSuccess, style, children }) {
    super({ name, value, onChange,
            placeholder, validator, indicateSuccess, style, children });
    this.__id = __ID++;
  }

  render() {
    return <Form.FormContext.Consumer>{ form => {
      let value = utility.getValue(form, this.props.value);

      let r = <>
        <input type="text"
               className="form-input"
               name={ this.props.name }
               value={ value || "" }
               id={ "__slt_"+this.__id }
               ref={ el => {this.__text = el;} }
               onChange={() => {
                 utility.onChange(form, this.props.onChange, this.props.name, this.__text.value);

                 if (this.props.validator) {
                   // TODO!!!!
                 }
               }}
               placeholder={ this.props.placeholder || "" }
               style={ this.props.style }/>
      </>;

      let hasValidator = utility.hasValidator(form, this.props.validator, this.props.name);
      let hasChildren = !!this.props.children;

      if (hasValidator || hasChildren) {
        let cls = "form-group";
        let validateMessage = utility.validate(form, this.props.validator, this.props.name,
            value);

        if (hasValidator) {
          if (validateMessage) {
            cls += " has-error";
          } else if (!validateMessage && this.props.indicateSuccess) {
            cls += " has-success";
          }
        }

        return <>
          <div className={ cls }>
            {
              hasChildren &&
                <label className="form-label"
                       htmlFor={"__slt_" + this.__id}>
                  { this.props.children }
                </label>
            }
            { r }
            {
              validateMessage &&
                <p className="form-input-hint">
                  { validateMessage }
                </p>
            }
          </div>
        </>;
      } else {
        return r;
      }
    } }</Form.FormContext.Consumer>;
  }
}

export default SingleLineText;
