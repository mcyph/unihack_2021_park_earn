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

class Filter extends Component {
  constructor({ progress }) {
    super({ progress });
  }

  render() {
    return <>
      <div className="filter">
        <input type="radio" id="tag-0" className="filter-tag" name="filter-radio" hidden checked />
        <input type="radio" id="tag-1" className="filter-tag" name="filter-radio" hidden />
        <input type="radio" id="tag-2" className="filter-tag" name="filter-radio" hidden />

        <div className="filter-nav">
          <label className="chip" htmlFor="tag-0">All</label>
          <label className="chip" htmlFor="tag-1">Action</label>
          <label className="chip" htmlFor="tag-2">Roleplaying</label>
        </div>

        <div className="filter-body">
          <div className="filter-item card" data-tag="tag-1">
            { /*Filter item content*/ }
          </div>
          <div className="filter-item card" data-tag="tag-2">
            { /*Filter item content*/ }
          </div>
          { /*Filter items*/ }
        </div>
      </div>

    </>;
  }
}

export default Filter;
