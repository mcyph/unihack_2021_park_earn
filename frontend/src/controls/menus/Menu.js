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

class Menu extends Component {
  constructor({  }) {
    super({  });
    this.state = {};
  }

  render() {
    return (
      <ul className="menu">
        {/* menu header text */}
        <li className="divider" data-content="LINKS">
        </li>
        {/* menu item standard */}
        <li className="menu-item">
          <a href="#">
            <i className="icon icon-link" /> Slack
          </a>
        </li>
        {/* menu item with form control */}
        <li className="menu-item">
          <label className="form-checkbox">
            <input type="checkbox" />
            <i className="form-icon" /> form-checkbox
          </label>
        </li>
        {/* menu divider */}
        <li className="divider" />
        {/* menu item with badge */}
        <li className="menu-item">
          <a href="#">
            <i className="icon icon-link" /> Settings
          </a>
          <div className="menu-badge">
            <label className="label label-primary">2</label>
          </div>
        </li>

        <li className="menu-item">
          <a href="#">My profile</a>
          <div className="menu-badge">
            <label className="form-checkbox">
              <input type="checkbox" />
              <i className="form-icon" /> Public
            </label>
          </div>
        </li>
      </ul>
    );
  }
}

export default Menu;