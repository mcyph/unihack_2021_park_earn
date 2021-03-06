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

class SevenDaySelector extends Component {
  constructor({ currentDate, disabled, enabled, selected, onSelect, style }) {
    selected = selected || [];
    disabled = disabled || [];
    super({ currentDate, disabled, enabled, selected, onSelect, style });
  }

  /**
   * Get all the dates for the current week
   */
  __getDatesForCurrentWeek=()=>{
    let dateOffset = 24*60*60*1000;  // a day
    let baseDate = new Date(this.props.currentDate.getTime());
    let out = [baseDate];

    let date = baseDate;
    while (date.getDay() !== 0) {
      date = new Date(date.getTime());
      date.setTime(date.getTime() - dateOffset);
      out.push(date)
    }
    out.reverse();

    date = new Date(baseDate.getTime());
    date.setTime(date.getTime() + dateOffset);

    while (date.getDay() !== 0) {
      date = new Date(date.getTime());
      date.setTime(date.getTime() + dateOffset);
      out.push(date)
    }
    return out;
  }

  render=()=>{
    let week = this.__getDatesForCurrentWeek();
    let outEarly = [];
    let out = [];
    let outLate = [];

    for (let halfHour=0; halfHour<48; halfHour++) {
      for (let date of week) {
        let hours = `${Math.floor(halfHour / 2) }:${ halfHour % 2 !== 0 ? "30" : "00"}`;
        let fullDate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${hours}`

        let className = "btn btn-block"
        if (this.props.enabled) {
          if (this.props.enabled.indexOf(fullDate) === -1) {
            // Not explicitly enabled
            className += " disabled";
          } else if (this.props.selected && this.props.selected.indexOf(fullDate) !== -1) {
            // Enabled and selected
            className += " btn-primary";
          } else {
            // Enabled and selectable
            className += " btn-success";
          }
        } else if (this.props.disabled) {
          if (this.props.disabled.indexOf(fullDate) !== -1) {
            // Explicitly disabled
            className += " disabled";
          } else if (this.props.selected && this.props.selected.indexOf(fullDate) !== -1) {
            // Not explicitly disabled and selected
            className += " btn-primary";
          } else {
            // Not explicitly disabled and selectable
            className += " btn-success";
          }
        } else {

        }

        let elm = <>
          <div className="calendar-date" style={{padding: 0, margin: "-1px"}}>
            <button className={ className }
                    onClick={() => {
                      if (this.props.onSelect) {
                        return this.props.onSelect(fullDate);
                      }
                    }}
                    style={{
                      padding: 0,
                      margin: 0,
                      borderRadius: "0",
                      color: "black"
                    }}>
              { hours }
            </button>
          </div>
        </>
        //if (halfHour < 14) {
        //  outEarly.push(elm);
        //} else if (halfHour < 44) {
          out.push(elm);
        //} else {
        //  outLate.push(elm);
        //}
      }
    }

    let now = new Date(this.props.currentDate.getTime());
    let onejan = new Date(this.props.currentDate.getFullYear(), 0, 1);
    let weekNumber = Math.ceil( (((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7 );

    let months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    let formatDate=(date)=>{
      return (
        date.toString().substr(0, 3)+" "+
        date.getDate()+" "+
        months[date.getMonth()].substr(0, 3)
      );
    }

    return <>
      <div className={ "calendar "+this.props.size }>
        { /*calendar navbar*/ }
        <div className="calendar-nav navbar">
          <button className="btn btn-action btn-link btn-lg"
                  onClick={() => {}}>
            <i className="icon icon-arrow-left" />
          </button>
          <div className="navbar-primary">Week {weekNumber} of {week[0].getFullYear()}</div>
          <button className="btn btn-action btn-link btn-lg"
                  onClick={() => {this.props.onSelect()}}>
            <i className="icon icon-arrow-right" />
          </button>
        </div>

        <div className="calendar-container">
          { /*calendar days header*/ }
          <div className="calendar-header">
            <div className="calendar-date">{formatDate(week[0])}</div>
            <div className="calendar-date">{formatDate(week[1])}</div>
            <div className="calendar-date">{formatDate(week[2])}</div>
            <div className="calendar-date">{formatDate(week[3])}</div>
            <div className="calendar-date">{formatDate(week[4])}</div>
            <div className="calendar-date">{formatDate(week[5])}</div>
            <div className="calendar-date">{formatDate(week[6])}</div>
          </div>

          { /*calendar days*/ }
          <div className="btn-group">
          <div className="calendar-body"
               ref={el => {this.calendarBody = el;}}
               style={{ maxHeight: "50vh", overflowY: "auto" }}>
            { out }
          </div>
            </div>
        </div>
      </div>
    </>;
  }

  componentDidMount() {
    this.calendarBody.scrollTop = 600;
  }
}

export default SevenDaySelector;
