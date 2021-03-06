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

class MultiLineText extends Component {
  /**
   *
   * @param name
   * @param value
   * @param onChange
   * @param placeholder
   * @param label
   * @param rows
   * @param validator
   * @param style
   */
  constructor({ name, value, onChange,
                placeholder, label, rows, validator, style }) {
    super({ name, value, onChange,
            placeholder, label, rows, validator, style });
    this.__id = __ID++;
  }

  render() {
     return <Form.FormContext.Consumer>{ form => {
       let value = utility.getValue(form, this.props.value);

       return <>
         <div className="form-group">
           {
             this.props.label &&
               <label className="form-label"
                      htmlFor={ "__mlt_" + this.__id }>
                 { this.props.label }
               </label>
           }
           <textarea className="form-input"
                     name={ this.props.name }
                     id={ "__mlt_" + this.__id }
                     ref={ el => {this.__textarea = el;} }
                     placeholder={ this.props.placeholder }
                     rows={ this.props.rows }
                     onChange={() => {
                       utility.onChange(form, this.props.onChange, this.props.name, this.__textarea.value);
                     }
                     }>{ value }</textarea>
         </div>
       </>;
     } }</Form.FormContext.Consumer>;
  }
}

export default MultiLineText;
