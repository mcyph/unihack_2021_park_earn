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

class Calendar extends Component {
  static SIZE_NORMAL = '';
  static SIZE_LARGE = 'calendar-lg';

  constructor({ year, month, size, style }) {
    super({ year, month, size, style });
  }

  render() {
    return <>
      <div className="calendar">
        { /*calendar navbar*/ }
        <div className="calendar-nav navbar">
          <button className="btn btn-action btn-link btn-lg">
            <i className="icon icon-arrow-left"></i>
          </button>
          <div className="navbar-primary">March 2017</div>
          <button className="btn btn-action btn-link btn-lg">
            <i className="icon icon-arrow-right"></i>
          </button>
        </div>

        <div className="calendar-container">
          <div className="calendar-header">
            <div className="calendar-date">Sun</div>
            <div className="calendar-date">Mon</div>
            <div className="calendar-date">Tue</div>
            <div className="calendar-date">Wed</div>
            <div className="calendar-date">Thu</div>
            <div className="calendar-date">Fri</div>
            <div className="calendar-date">Sat</div>
          </div>

          <div className="calendar-body">
            { /*calendar previous month*/ }
            <div className="calendar-date prev-month">
              <button className="date-item">26</button>
            </div>
            ...
            <div className="calendar-date prev-month">
              <button className="date-item">28</button>
            </div>

            { /*calendar current month*/ }
            <div className="calendar-date">
              <button className="date-item">1</button>
            </div>
            <div className="calendar-date">
              <button className="date-item">2</button>
            </div>
            <div className="calendar-date">
              <button className="date-item">3</button>
            </div>
            { /*calendar date: today*/ }
            <div className="calendar-date">
              <button className="date-item date-today">4</button>
            </div>
            { /*calendar date: tooltip*/ }
            <div className="calendar-date tooltip" data-tooltip="You have appointments">
              <button className="date-item">5</button>
            </div>
            { /*calendar date: not available*/ }
            <div className="calendar-date tooltip" data-tooltip="Not available">
              <button className="date-item" disabled="">6</button>
            </div>

            { /*calendar range*/ }
            <div className="calendar-date calendar-range range-start">
              <button className="date-item">7</button>
            </div>
            <div className="calendar-date calendar-range">
              <button className="date-item">8</button>
            </div>
            <div className="calendar-date calendar-range range-end">
              <button className="date-item">9</button>
            </div>
            ...
            <div className="calendar-date">
              <button className="date-item">31</button>
            </div>

            { /*calendar next month*/ }
            <div className="calendar-date next-month">
              <button className="date-item">1</button>
            </div>
          </div>
        </div>
      </div>


      <div className="calendar calendar-lg">
        { /*calendar navbar structure*/ }

        <div className="calendar-container">
          { /*calendar header structure*/ }

          <div className="calendar-body">
            { /*calendar date with events*/ }
            <div className="calendar-date">
              <button className="date-item active">20</button>
              <div className="calendar-events">
                <a className="calendar-event bg-success text-light" href="#calendars">Spring Equinox</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
  }
}

export default Calendar;
