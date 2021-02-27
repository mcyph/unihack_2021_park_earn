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

class SingleLineText extends Component {
  constructor({ name, value, placeholder, onChange, validator, style }) {
    super({ name, value, placeholder, onChange, validator, style });
  }

  render() {
    return <Form.FormContext.Consumer>{ context => {
      let value = utility.getValue(context, this.props.value);

      return <>
        <input
          ref={ el => {this.__text = el;} }
          name={ this.props.name }
          className="form-input"
          type="text"
          onChange={() => {
            utility.onChange(context, this.props.onChange, this.props.name,
                  this.__text.value);

            if (this.props.validator) {
              // TODO!!!!
            }
          }}
          value={ value || "" }
          placeholder={ this.props.placeholder || "" }
          style={ this.props.style }
        />
      </>;
    } }</Form.FormContext.Consumer>;
  }
}

export default SingleLineText;
