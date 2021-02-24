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

class Button extends Component {
  static SIZE = {
    DEFAULT: '',
    BLOCK: 'btn-block', FULLWIDTH: 'btn-block',
    SMALL: 'btn-sm',
    LARGE: 'btn-lg'
  };
  static STATE = {
    ACTIVE: 1,
    DISABLED: 2,
    LOADING: 4
  };
  static COLOR = {
    DEFAULT: '',
    PRIMARY: 'btn-primary',
    ERROR: 'btn-error',
    SUCCESS: 'btn-success'
  };
  static BORDER_STYLE = {
    SQUARE: '',
    CIRCLE: 's-circle', FAB: 's-circle',
    LINK: 'btn-link'
  };

  /**
   *
   * @param title
   * @param onClick
   * @param size one of:
   *        * `Button.SIZE.DEFAULT`
   *        * `Button.SIZE.BLOCK`
   *        * `Button.SIZE.FULLWIDTH`
   *        * `Button.SIZE.SMALL`
   *        * `Button.SIZE.LARGE`
   * @param state one of:
   *        * `Button.STATE.ACTIVE`
   *        * `Button.STATE.DISABLED`
   *        * `Button.STATE.LOADING`
   * @param color one of:
   *        * `Button.COLOR.DEFAULT`
   *        * `Button.COLOR.PRIMARY`
   *        * `Button.COLOR.ERROR`
   *        * `Button.COLOR.SUCCESS`
   * @param borderStyle one of:
   *        * `Button.BORDER_STYLE.SQUARE`
   *        * `Button.BORDER_STYLE.CIRCLE`
   *        * `Button.BORDER_STYLE.FAB`
   *        * `Button.BORDER_STYLE.LINK`
   * @param leftIcon
   * @param rightIcon same as `leftIcon` but displayed on
   *        the right hand of the child content
   * @param badge text to display as a "badge" in the bottom right
   * @param style
   */
  constructor({ onClick, size, state, color, borderStyle,
                leftIcon, rightIcon, badge, style, children }) {
    super({ onClick, size, state, color, borderStyle,
            leftIcon, rightIcon, badge, style, children });
  }

  render() {
    let className = 'btn';
    if (this.props.size) {
      className += ' '+this.props.size;
    }
    if (this.props.color) {
      className += ' '+this.props.color;
    }
    if (this.props.borderStyle) {
      className += ' '+this.props.borderStyle;
    }

    let state = this.props.state || 0;
    if (state & Button.STATE.ACTIVE) {
      className += ' active';
    }
    if (state & Button.STATE.DISABLED) {
      className += ' disabled';
    }
    if (state & Button.STATE.LOADING) {
      className += ' loading';
    }

    return this.props.badge ? <>
      <button data-badge={ this.props.badge }
              onClick={evt => {
                if (this.props.onClick)
                  return this.props.onClick(evt);
              }}
              className={ className }
              style={ this.props.style }>
        { this.props.leftIcon || '' }
        { this.props.children }
        { this.props.rightIcon || '' }
      </button>
    </> : <>
      <button onClick={evt => {
                if (this.props.onClick)
                  return this.props.onClick(evt);
              }}
              className={ className }
              style={ this.props.style }>
        { this.props.leftIcon || '' }
        { this.props.children }
        { this.props.rightIcon || '' }
      </button>
    </>;
  }
}

export default Button;
