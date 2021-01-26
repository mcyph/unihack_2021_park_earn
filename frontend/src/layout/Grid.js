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


class Grid extends Component {
  static FRACTIONS = {
    AUTO: 'col-auto',
    _1: 'col-1',
    _2: 'col-2',
    _3: 'col-3',
    _4: 'col-4',
    _5: 'col-5',
    _6: 'col-6',
    _7: 'col-7',
    _8: 'col-8',
    _9: 'col-9',
    _10: 'col-10',
    _11: 'col-11',
    _12: 'col-12'
  };

  /**
   *
   * @param striped
   */
  constructor({  }) {
    super({  });

  }
  render() {
  }
}

export default Grid;


<Grid xs={Grid.FRACTIONS._1}>

</Grid>
