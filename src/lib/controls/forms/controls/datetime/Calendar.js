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
import calendar from "calendar-month-array";

class Calendar extends Component {
  static SIZE_NORMAL = '';
  static SIZE_LARGE = 'calendar-lg';

  constructor({ currentDate, size, onChange, onPrevMonth, onNextMonth, style }) {
    super({ currentDate, size, onChange, onPrevMonth, onNextMonth, style });
  }

  render() {
    let weeks = calendar(this.props.currentDate, {
      weekStartDay: 1,
      formatHeader: date => date.toString().slice(0, 2),
      formatDate: date => date.getDate(),  // FIXME!
      formatSiblingMonthDate: () => null
    });

    let out = [];
    let foundFirstDay = false;

    for (let week of weeks.slice(1)) {
      for (let day of week) {
        if (!day && !foundFirstDay) {
          // Still in previous month
          out.push(
            <div className="calendar-date prev-month">
              <button className="date-item"
                      onClick={() => {this.onChange && this.onChange(parseInt(day))}}>
                { day }
              </button>
            </div>
          );
        } else if (day && !foundFirstDay) {
          // In current month
          // TODO: Add handling for "today"!!!
          // TODO: Add handling for "disabled"!!!
          // <div className="calendar-date tooltip" data-tooltip="Not available">
          //               <button className="date-item" disabled="">6</button>
          //             </div>
          // <div className="calendar-date">
          //               <button className="date-item date-today">4</button>
          //             </div>
          // TODO: Add handling for ranges!!!
          // { /*calendar range*/ }
          //             <div className="calendar-date calendar-range range-start">
          //               <button className="date-item">7</button>
          //             </div>
          //             <div className="calendar-date calendar-range">
          //               <button className="date-item">8</button>
          //             </div>
          //             <div className="calendar-date calendar-range range-end">
          //               <button className="date-item">9</button>
          //             </div>
          // TODO: Add support for calendar events/active days!!!
          // <div className="calendar-date">
          //               <button className="date-item active">20</button>
          //               <div className="calendar-events">
          //                 <a className="calendar-event bg-success text-light" href="#calendars">Spring Equinox</a>
          //               </div>
          //             </div>
          out.push(
            <div className="calendar-date">
              <button className="date-item"
                      onClick={() => {this.onChange && this.onChange(parseInt(day))}}>
                { day }
              </button>
            </div>
          );
        } else if (!day && foundFirstDay) {
          // In next month
          out.push(
            <div className="calendar-date next-month">
              <button className="date-item"
                      onClick={() => {this.onChange && this.onChange(parseInt(day))}}>
                { day }
              </button>
            </div>
          );
        } else {
          throw new Error("Shouldn't get here!")
        }
      }
    }

    return <>
      <div className={ "calendar "+this.props.size }>
        { /*calendar navbar*/ }
        <div className="calendar-nav navbar">
          <button className="btn btn-action btn-link btn-lg"
                  onClick={() => { this.props.onPrevMonth && this.props.onPrevMonth() }}>
            <i className="icon icon-arrow-left" />
          </button>
          <div className="navbar-primary">March 2017</div>
          <button className="btn btn-action btn-link btn-lg"
                  onClick={() => { this.props.onNextMonth && this.props.onNextMonth() }}>
            <i className="icon icon-arrow-right" />
          </button>
        </div>

        <div className="calendar-container">
          { /*calendar days header*/ }
          <div className="calendar-header">
            <div className="calendar-date">Sun</div>
            <div className="calendar-date">Mon</div>
            <div className="calendar-date">Tue</div>
            <div className="calendar-date">Wed</div>
            <div className="calendar-date">Thu</div>
            <div className="calendar-date">Fri</div>
            <div className="calendar-date">Sat</div>
          </div>

          { /*calendar days*/ }
          <div className="calendar-body">
            { out }
          </div>
        </div>
      </div>
    </>;
  }
}

export default Calendar;
