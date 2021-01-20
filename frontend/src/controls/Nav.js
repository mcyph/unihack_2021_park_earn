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

class Nav extends Component {
  constructor() {
    super(props);
  }

  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <a href="#">Elements</a>
        </li>
        <li className="nav-item active">
          <a href="#">Layout</a>
          <ul className="nav">
            <li className="nav-item">
              <a href="#">Flexbox grid</a>
            </li>
            <li className="nav-item">
              <a href="#">Responsive</a>
            </li>
            <li className="nav-item">
              <a href="#">Navbar</a>
            </li>
            <li className="nav-item">
              <a href="#">Empty states</a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#">Components</a>
        </li>
        <li className="nav-item">
          <a href="#">Utilities</a>
        </li>
      </ul>
    );
  }
}

export default Nav;
