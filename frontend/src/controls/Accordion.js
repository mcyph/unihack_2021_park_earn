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

let __ACCORDION_ID = 0;

class MutuallyExclusiveAccordion extends Component {
  PARAMS = {
    title: Param(SINGLE_LINE_TEXT, ARG_REQUIRED),
    children: Param(ELEMENTS, ARG_REQUIRED)
  }

  /**
   *
   * @param title
   * @param children
   */
  constructor({ title, children }) {
    super({ title, children });
    this.state = {};
    this.id = __ACCORDION_ID++;
  }

  render() {
    // mutually exclusive Accordions example (with same input names)
    return (
      <div className="accordion">
        <input type="radio"
               id={`accordion-${this.id}`}
               name="accordion-radio"
               hidden />
        <label className="accordion-header"
               for={`accordion-${this.id}`}>
          { this.props.title }
        </label>
        <div className="accordion-body">
          { this.props.children }
        </div>
      </div>
    );
  }
}

class ToggleAccordion extends Component {
  PARAMS = {
    title: Param(SINGLE_LINE_TEXT, ARG_REQUIRED),
    children: Param(ELEMENTS, ARG_REQUIRED)
  }

  /**
   *
   * @param title
   * @param children
   */
  constructor({ title, children }) {
    super({ title, children });
    this.state = {};
    this.id = __ACCORDION_ID++;
  }

  render() {
    // standard Accordions example
    return (
      <div className="accordion">
        <input type="checkbox"
               id={`accordion-${this.id}`}
               name="accordion-checkbox"
               hidden />
        <label className="accordion-header"
               for={`accordion-${this.id}`}>
          <i className="icon icon-arrow-right mr-1" />
          { this.props.title }
        </label>
        <div className="accordion-body">
          { this.props.children }
        </div>
      </div>
    );
  }
}

const exportMe = { MutuallyExclusiveAccordion, ToggleAccordion };
export default exportMe;
