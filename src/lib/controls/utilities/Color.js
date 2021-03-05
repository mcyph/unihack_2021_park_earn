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

class Color extends Component {
  static PRIMARY = 'PRIMARY';
  static SECONDARY = 'SECONDARY';
  static DARK = 'DARK';
  static GRAY = 'GRAY';
  static LIGHT = 'LIGHT';
  static SUCCESS = 'SUCCESS';
  static WARNING = 'WARNING';
  static ERROR = 'ERROR';

  static __TEXT = {
    PRIMARY: 'text-primary',
    SECONDARY: 'text-secondary',
    DARK: 'text-dark',
    GRAY: 'text-gray',
    LIGHT: 'text-light',
    SUCCESS: 'text-success',
    WARNING: 'text-warning',
    ERROR: 'text-error'
  }
  static __BACKGROUND = {
    PRIMARY: 'bg-primary',
    SECONDARY: 'bg-secondary',
    DARK: 'bg-dark',
    GRAY: 'bg-gray',
    //LIGHT: 'text-light',
    SUCCESS: 'bg-success',
    WARNING: 'bg-warning',
    ERROR: 'bg-error'
  }

  constructor({ text, background, style, children }) {
    super({ text, background, style, children })
  }

  render() {
    let className = (this.props.text||'') + ' ' + (this.props.background||'');
    return <>
      <span className={ className }
            style={ this.props.style }>
        { this.props.children }
      </span>
    </>;
  }
}

export default Color;
