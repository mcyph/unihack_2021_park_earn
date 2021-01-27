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

class FlexColumn extends Component {
  /**
   *
   * @param defaultSize
   * @param xs
   * @param sm
   * @param md
   * @param lg
   * @param xl
   * @param mx
   * @param ml
   * @param mr
   * @param children
   */
  constructor({ defaultSize, xs, sm, md, lg, xl, mx, ml, mr, children }) {
    super({ defaultSize, xs, sm, md, lg, xl, mx, ml, mr, children });
  }

  render() {
    let classNames = ['column'];
    if (this.props.defaultSize) {
      classNames.push(this.__getClass(null, this.props.defaultSize));
    }
    for (let type of ['xs', 'sm', 'md', 'lg', 'xl', 'mx', 'ml', 'mr']) {
      if (this.props[type]) {
        classNames.push(this.__getClass(type, this.props[type]));
      }
    }

    return (
      <div className={ classNames.join(' ') }>
        { this.props.children }
      </div>
    );
  }

  __getClass(type, value) {
    if (1 <= value <= 12) {
      return type ? `col-${Math.round(value)}` : `col-${type}-${Math.round(value)}`;
    } else if (value === 'auto') {
      return type ? `col-${type}-auto` : `col-auto`; // CHECK ME!!
    } else {
      throw new Error(`Invalid value for type ${type}: ${value}!`);
    }
  }
}

export default FlexColumn;
