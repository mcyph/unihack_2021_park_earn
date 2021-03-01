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

class FlexRow extends Component {
  /**
   *
   * @param gapless `true` for no spaces in between `FlexColumn`s. Defaults to `false`.
   * @param singleLine `true` to display all `FlexColumn`s on a single line.
   *                   Defaults to `false` to allow wrapping.
   * @param style any additional styles
   * @param children
   */
  constructor({ gapless, singleLine, style, children }) {
    super({ gapless, singleLine, style, children });
  }

  render() {
    let className = 'columns';
    if (this.props.singleLine) {
      className += ' col-oneline';
    }
    if (this.props.gapless) {
      className += ' col-gapless';
    }

    return <div className={ className }
                style={ this.props.style }>
      { this.props.children }
    </div>;
  }
}

export default FlexRow;
