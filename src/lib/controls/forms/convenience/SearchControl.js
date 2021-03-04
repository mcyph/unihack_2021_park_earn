
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

class SearchControl extends Component {
  constructor({ onSearch, placeholderText, searchText, style }) {
    super({ onSearch, placeholderText, searchText, style });
  }

  render() {
    return <>
      <div className="input-group input-inline"
           style={ this.props.style }>
        <input ref={ e => {this.__text = e;} }
               className="form-input"
               type="text"
               placeholder={ this.props.placeholderText || "search" }
               onSubmit={ () => this.__onSearch() } />
        <button className="btn btn-primary input-group-btn"
                onClick={ () => this.__onSearch() }>
          { this.props.searchText || "Search" }
        </button>
      </div>
    </>
  }

  __onSearch() {
    this.props.onSearch(this.__text.value);
  }
}

export default SearchControl;
