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

class PageNumberPagination extends Component {
  constructor({ totalPages, currentPage, maxItems }) {
    super({  });
    this.state = {};
  }

  render() {
    return (
      <ul className="pagination">
        <li className="page-item disabled">
          <a href="#" tabIndex="-1">Previous</a>
        </li>
        <li className="page-item active">
          <a href="#">1</a>
        </li>
        <li className="page-item">
          <a href="#">2</a>
        </li>
        <li className="page-item">
          <a href="#">3</a>
        </li>
        <li className="page-item">
          <span>...</span>
        </li>
        <li className="page-item">
          <a href="#">12</a>
        </li>
        <li className="page-item">
          <a href="#">Next</a>
        </li>
      </ul>
    );
  }
}

class NextPrevPagination extends Component {
  constructor({  }) {
    super({  });
    this.state = {};
  }

  render() {
    return (
      <ul className="pagination">
        <li className="page-item page-prev">
          <a href="#">
            <div className="page-item-subtitle">Previous</div>
            <div className="page-item-title h5">Getting started</div>
          </a>
        </li>
        <li className="page-item page-next">
          <a href="#">
            <div className="page-item-subtitle">Next</div>
            <div className="page-item-title h5">Layout</div>
          </a>
        </li>
      </ul>
    );
  }
}

export default Pagination;
