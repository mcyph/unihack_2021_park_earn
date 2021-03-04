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

class Parallax extends Component {
  constructor({ src, title, style }) {
    super({ src, title, style });
  }

  render() {
    return <>
      <div className="parallax"
           style={this.props.style}>
        <div className="parallax-top-left" tabIndex="1" />
        <div className="parallax-top-right" tabIndex="2" />
        <div className="parallax-bottom-left" tabIndex="3" />
        <div className="parallax-bottom-right" tabIndex="4" />
        <div className="parallax-content">
          {
            this.props.title ? <div className="parallax-front">
              <h2>{this.props.title}</h2>
            </div> : ''
          }
          <div className="parallax-back">
            <img src={ this.props.src }
                 className="img-responsive rounded" />
          </div>
        </div>
      </div>
    </>;
  }
}

export default Parallax;
