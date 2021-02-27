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
import Button from "./Button";
import FlexColumn from "../../../layout/flexbox/FlexColumn";
import FlexColumns from "../../../layout/flexbox/FlexColumns";
import FlexContainer from "../../../layout/flexbox/FlexContainer";
import utility from "./__utility";

// TODO: Integrate with https://joi.dev/!!
// It might also pay to use
// https://developer.mozilla.org/en-US/docs/Web/API/FormData

const Joi = require('joi');

class Form extends Component {
  static FormContext = utility.getFormContext();

  static expression = Joi.expression.bind(Joi);
  static ref = Joi.ref.bind(Joi);
  static any = Joi.any.bind(Joi);
  static alternatives = Joi.alternatives.bind(Joi);
  static array = Joi.array.bind(Joi);
  static binary = Joi.binary.bind(Joi);
  static boolean = Joi.boolean.bind(Joi);
  static date = Joi.date.bind(Joi);
  static function = Joi.function.bind(Joi);
  static link = Joi.link.bind(Joi);
  static number = Joi.number.bind(Joi);
  static object = Joi.object.bind(Joi);
  static string = Joi.string.bind(Joi);
  static symbol = Joi.string.bind(Joi);

  /**
   *
   * @param action
   * @param method
   * @param values
   * @param onChange
   * @param onSubmit
   * @param disabled
   * @param autocomplete
   * @param validators
   * @param style
   */
  constructor({ action, method, values, onChange, onSubmit,
                disabled, autocomplete, validators, style }) {

    autocomplete = autocomplete || false;
    method = method || 'get';

    super({ action, method, values, onChange, onSubmit,
            disabled, autocomplete, validators, style });
    this.__values = { ...values };
  }

  /**
   *
   * @param name
   * @param value
   * @private
   */
  __setValueFromChild(name, value) {
    this.__values[name] = value;
  }

  __getValueFromChild(name) {
    return this.__values[name];
  }

  /**
   *
   * @param name
   * @param value
   * @private
   */
  __onChildChange(name, value) {
    this.__values[name] = value;
    if (this.props.onChange) {
      this.props.onChange(this.__values);
    }
  }

  /**
   *
   * @param name
   * @returns {null|*}
   * @private
   */
  __getValidatorFromChild(name) {
    if (this.props.validators) {
      return this.props.validators[name];
    } else {
      return null;
    }
  }

  render() {
    this.__values = { ...(this.props.values || {}) };

    return <>
      <Form.FormContext.Provider value={ this }>
        <form action={ this.props.action }
              method={ this.props.method }
              onChange={ this.props.onChange }
              onSubmit={ this.props.onSubmit }
              autoComplete={ this.props.autocomplete }
              style={ this.props.style }>
          {
            this.props.disabled ?
              <fieldset disabled>{ this.props.children }</fieldset> :
              <fieldset>{ this.props.children }</fieldset>
          }
        </form>
      </Form.FormContext.Provider>
    </>;
  }
}

export default Form;
