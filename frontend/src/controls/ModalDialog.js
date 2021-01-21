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

class ModalDialog extends Component {
  constructor({ title, content, footer }) {
    super({ title, content, footer });
  }

  render() {
    return (
      <div className="modal active" id="modal-id">
        <a href="#close" className="modal-overlay" aria-label="Close" />
        <div className="modal-container">
          <div className="modal-header">
            <a href="#close" className="btn btn-clear float-right" aria-label="Close" />
            <div className="modal-title h5">{ this.props.title }</div>
          </div>
          <div className="modal-body">
            <div className="content">
              {/* content here */}
              { this.props.content }
            </div>
          </div>
          <div className="modal-footer">
            { this.props.footer }
          </div>
        </div>
      </div>
    );
  }
}

export default ModalDialog;
