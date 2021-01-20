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

class Tab extends Component {
  /**
   *
   * @param block whether to render as block+expand to full width
   */
  constructor({ block }) {
    super({  });
    this.state = {};
  }

  render() {
    return (
      <ul className="tab tab-block">
        <li className="tab-item active">
          <a href="#">Music</a>
        </li>
        <li className="tab-item">
          <a href="#" className="active">Playlists</a>
        </li>
        <li className="tab-item">
          <a href="#">Radio</a>
        </li>
        <li className="tab-item">
          <a href="#">Connect</a>
        </li>
      </ul>
    );
  }
}

export default Tab;
