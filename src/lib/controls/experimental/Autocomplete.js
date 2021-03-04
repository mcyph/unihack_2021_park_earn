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

class Autocomplete extends Component {
  constructor({  }) {
    super({  });
  }

  render() {
    return <>
      <div className="form-autocomplete">
        { /*autocomplete forms container*/ }
        <div className="form-autocomplete-input form-input">

          { /*autocomplete chips*/ }
          <div className="chip">
            <img src="img/avatar-1.png" className="avatar avatar-sm" alt="Thor Odinson" />
            Thor Odinson
            <a href="#" className="btn btn-clear" aria-label="Close" role="button" />
          </div>

          { /*autocomplete real forms box*/ }
          <input className="form-input" type="text" placeholder="typing here" />
        </div>

        { /*autocomplete suggestion list*/ }
        <ul className="menu">
          { /*menu list items*/ }
          <li className="menu-item">
            <a href="#">
              <div className="tile tile-centered">
                <div className="tile-icon">
                  ...
                </div>
                <div className="tile-content">
                  ...
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>;
  }
}

export default Autocomplete;
