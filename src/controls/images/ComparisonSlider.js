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

class ComparisonSlider extends Component {
  constructor({ beforeImgSrc, afterImgSrc }) {
    super({ beforeImgSrc, afterImgSrc });
  }

  render() {
    return <>
      <div className="comparison-slider">
        <figure className="comparison-before">
          { /*image (before)*/ }
          <img className="rounded"
               src={ this.props.beforeImgSrc } />
          <div className="comparison-label">Before</div>
        </figure>

        <figure className="comparison-after">
          { /*image (after)*/ }
          <img className="rounded"
               src={ this.props.afterImgSrc } />
          <div className="comparison-label">After</div>
          <textarea className="comparison-resizer" readOnly />
        </figure>
      </div>
    </>;
  }
}

export default ComparisonSlider;
