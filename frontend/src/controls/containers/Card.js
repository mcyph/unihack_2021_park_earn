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

class Card extends Component {
  /**
   *
   * @param image
   * @param title
   * @param subtitle
   * @param body
   * @param footer
   */
  constructor({ image, title, subtitle, body, footer }) {
    super({ image, title, subtitle, body, footer });
    this.state = {
      image: image,
      title: title,
      subtitle: subtitle,
      body: body,
      footer: footer
    };
  }

  render() {
    // Add image
    let image = this.state['image'] ? <>
      <div className="card-image">
        <img alt={ this.state.title||'' }
             src={ this.state['image'] }
             className="img-responsive"/>
      </div>
    </>: '';

    // Add header
    let header = [];
    if (this.state['title']) {
      header.push(<div className="card-title h5">{ this.state['title'] }</div>);
    }
    if (this.state['subtitle']) {
      header.push(<div className="card-subtitle text-gray">{ this.state['subtitle'] }</div>);
    }

    // Add body
    let body = this.state['body'] ? <>
      <div className="card-body">{ this.state['body'] }</div>
    </> : '';

    // Add footer
    let footer = this.state['footer'] ? <>
      <div className="card-footer">{ this.state['footer'] }</div>
    </> : '';

    return (
      <div className="card">
        { image }
        { header.length ? <div className="card-header">{ header }</div> : '' }
        { body }
        { footer }
      </div>
    );
  }
}

export default Card;
