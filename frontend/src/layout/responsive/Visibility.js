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

class Visibility extends Component {
  static EXTRA_SMALL = 'xs';
  static SMALL = 'sm';
  static MEDIUM = 'md';
  static LARGE = 'lg';
  static EXTRA_LARGE = 'xl';

  /**
   *
   * @param showFor
   * @param hideFor
   * @param style
   * @param children
   */
  constructor({ showFor, hideFor, style, children }) {
    // https://picturepan2.github.io/spectre/layout/responsive.html
    super({ showFor, hideFor, style, children });
  }

  render() {
    let classNames = this.__getHideClasses().concat(
        this.__getShowClasses()
    );

    return <div className={ classNames.join(' ') }
                style={ this.props.style }>
      { this.props.children }
    </div>;
  }

  __getShowClasses() {
    let r = [];
    for (let i of this.props.showFor) {
      r.push(`show-${i}`);
    }
    return r;
  }

  __getHideClasses() {
    let r = [];
    for (let i of this.props.hideFor) {
      r.push(`hide-${i}`);
    }
    return r;
  }
}

export default Visibility;
