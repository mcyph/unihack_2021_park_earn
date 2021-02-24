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

class Timeline extends Component {
  /**
   *
   * @param progress
   */
  constructor({ progress }) {
    super({ progress });
  }

  render() {
    return <>
      <div className="timeline">
        <div className="timeline-item" id="timeline-example-1">
          <div className="timeline-left"><a className="timeline-icon tooltip" href="#timeline-example-1"
                                            data-tooltip="March 2016"></a></div>
          <div className="timeline-content">
            <div className="tile">
              <div className="tile-content">
                <p className="tile-subtitle">March 2016</p>
                <p className="tile-title">Initial commit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-item" id="timeline-example-2">
          <div className="timeline-left"><a className="timeline-icon icon-lg tooltip" href="#timeline-example-2"
                                            data-tooltip="February 2017"><i className="icon icon-check"></i></a></div>
          <div className="timeline-content">
            <div className="tile">
              <div className="tile-content">
                <p className="tile-subtitle">February 2017</p>
                <p className="tile-title">New Documents experience</p>
                <p className="tile-title"><a href="components.html#bars">Bars</a>: represent the progress of a task</p>
                <p className="tile-title"><a href="components.html#steps">Steps</a>: progress indicators of a sequence
                  of task steps</p>
                <p className="tile-title"><a href="components.html#tiles">Tiles</a>: repeatable or embeddable
                  information blocks</p>
              </div>
              <div className="tile-action">
                <button className="btn">View</button>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-item" id="timeline-example-3">
          <div className="timeline-left"><a className="timeline-icon icon-lg tooltip" href="#timeline-example-3"
                                            data-tooltip="March 2017"><i className="icon icon-check"></i></a></div>
          <div className="timeline-content">
            <div className="tile">
              <div className="tile-content">
                <p className="tile-subtitle">March 2017</p>
                <p className="tile-title"><a href="elements.html#icons">Icons</a>: single-element, responsive and pure
                  CSS icons</p>
                <p className="tile-title"><a href="components.html#popovers">Popovers</a>: small overlay content
                  containers</p>
                <p className="tile-title"><a href="experimentals.html#calendars">Calendars</a>: date or date range
                  picker and events display</p>
                <p className="tile-title"><a href="experimentals.html#carousels">Carousels</a>: slideshows for cycling
                  images</p>
              </div>
              <div className="tile-action">
                <button className="btn">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
  }
}

export default Timeline;
