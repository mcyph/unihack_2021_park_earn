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

class FlexCol extends Component {
  static MARGIN = {
    NONE: '',
    LEFT: 'col-lx-auto',
    RIGHT: 'col-rx-auto',
    BOTH: 'col-mx-auto'
  };

  /**
   *
   * @param defaultSize
   * @param extraSmall
   * @param small
   * @param medium
   * @param large
   * @param extraLarge
   * @param margin
   * @param children
   */
  constructor({ defaultSize, extraSmall, small, medium, large, extraLarge,
                margin, style, children }) {
    super({ defaultSize, extraSmall, small, medium, large, extraLarge,
            margin, style, children });
  }

  render() {
    let classNames = ['column'];
    for (let [type, value] of [
      [null, this.props.defaultSize],
      ['xs', this.props.extraSmall],
      ['sm', this.props.small],
      ['md', this.props.medium],
      ['lg', this.props.large],
      ['xl', this.props.extraLarge],
    ]) {
      if (value) {
        classNames.push(this.__getClass(type, value));
      }
    }

    return (
      <div className={ classNames.join(' ') }
           style={ this.props.style }>
        { this.props.children }
      </div>
    );
  }

  /**
   *
   * @param type
   * @param value
   * @returns {string|string|*}
   * @private
   */
  __getClass(type, value) {
    if (1 <= value <= 12) {
      // Numbers between 1 and 12 interpreted as twelfths
      return type ? `col-${type}-${Math.round(value)}` : `col-${Math.round(value)}`;
    } else if (value === 'auto' || value === 'expand') {
      // "auto" means "expand"
      return type ? `col-${type}-auto` : `col-auto`; // CHECK ME!!
    } else if (typeof value === 'string' &&
               value.test(/.*\/12$/)) {
      // Allow for explicit "5/12" format meaning "five twelfths"
      return this.__getClass(type, parseInt(value.split('/')[0]));
    } else {
      throw new Error(`Invalid value for type ${type}: ${value}!`);
    }
  }
}

export default FlexCol;

//<FlexCol small={'5/12'}
//            medium={'3/12'}>
//</FlexCol>
