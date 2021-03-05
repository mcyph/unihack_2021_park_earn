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

class Toast extends Component {
  static TYPE = {
    DEFAULT: '',
    PRIMARY: 'toast-primary',
    SECONDARY: 'toast-secondary',
    SUCCESS: 'toast-success',
    WARNING: 'toast-warning',
    ERROR: 'toast-error'
  };

  constructor({ title, type, rounded, onClose, children }) {
    super({ title, type, rounded, onClose, children });
  }
  render() {
    let className = 'toast';
    if (this.props.type) {
      className += ' ' + this.props.type;
    }
    if (this.props.rounded) {
      className += ' toast-rounded'
    }

    return <span className={ className }>
      {
        this.props.onClose &&
          <button className="btn btn-clear float-right"
                  onClick={() => {
                    this.props.onClose()
                  }}/>
      }
      { this.props.children }
    </span>
  }
}

export default Toast;
