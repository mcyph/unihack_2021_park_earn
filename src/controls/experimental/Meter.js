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

class Meter extends Component {
  constructor({ progress }) {
    super({ progress });
  }

  render() {
    return <>
      { /*Meter is green when low < value < high*/ }
      <meter class="meter" value="20" min="0" max="100" />
      <meter class="meter" value="60" min="0" max="100" low="30" high="80" />
      { /*Meter is yellow when value < low  or high < value*/ }
      <meter class="meter" value="85" min="0" max="100" low="30" high="80" />
      { /*Meter is red when value < low < high < optimum or optimum < low < high < value*/ }
      <meter class="meter" value="20" optimum="90" min="0" max="100" low="30" high="80" />
    </>;
  }
}

export default Meter;
