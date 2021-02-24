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

class ProgressBar extends Component {
  /**
   *
   * @param progress
   */
  constructor({ progress }) {
    super({ progress });
  }

  render() {
    return <>
      <div className="carousel">
        <!-- carousel locator -->
        <input className="carousel-locator" id="slide-1" type="radio" name="carousel-radio" hidden="" checked="" />
        <input className="carousel-locator" id="slide-2" type="radio" name="carousel-radio" hidden="" />
        <input className="carousel-locator" id="slide-3" type="radio" name="carousel-radio" hidden="" />
        <input className="carousel-locator" id="slide-4" type="radio" name="carousel-radio" hidden="" />

          <!-- carousel container -->
          <div className="carousel-container">
            <!-- carousel item -->
            <figure className="carousel-item">
              <label className="item-prev btn btn-action btn-lg" htmlFor="slide-4"><i
                  className="icon icon-arrow-left"></i></label>
              <label className="item-next btn btn-action btn-lg" htmlFor="slide-2"><i
                  className="icon icon-arrow-right"></i></label>
              <img className="img-responsive rounded" src="img/osx-yosemite.jpg" alt="macOS Yosemite Wallpaper">
            </figure>
            <figure className="carousel-item">
              <label className="item-prev btn btn-action btn-lg" htmlFor="slide-1"><i
                  className="icon icon-arrow-left"></i></label>
              <label className="item-next btn btn-action btn-lg" htmlFor="slide-3"><i
                  className="icon icon-arrow-right"></i></label>
              <img className="img-responsive rounded" src="img/osx-yosemite-2.jpg" alt="macOS Yosemite Wallpaper">
            </figure>
            <figure className="carousel-item">
              <label className="item-prev btn btn-action btn-lg" htmlFor="slide-2"><i
                  className="icon icon-arrow-left"></i></label>
              <label className="item-next btn btn-action btn-lg" htmlFor="slide-4"><i
                  className="icon icon-arrow-right"></i></label>
              <img className="img-responsive rounded" src="img/osx-el-capitan.jpg"
                   alt="macOS El Capitan Wallpaper">
            </figure>
            <figure className="carousel-item">
              <label className="item-prev btn btn-action btn-lg" htmlFor="slide-3"><i
                  className="icon icon-arrow-left"></i></label>
              <label className="item-next btn btn-action btn-lg" htmlFor="slide-1"><i
                  className="icon icon-arrow-right"></i></label>
              <img className="img-responsive rounded" src="img/osx-el-capitan-2.jpg"
                   alt="macOS El Capitan Wallpaper">
            </figure>
          </div>
          <!-- carousel navigation -->
          <div className="carousel-nav">
            <label className="nav-item text-hide c-hand" htmlFor="slide-1">1</label>
            <label className="nav-item text-hide c-hand" htmlFor="slide-2">2</label>
            <label className="nav-item text-hide c-hand" htmlFor="slide-3">3</label>
            <label className="nav-item text-hide c-hand" htmlFor="slide-4">4</label>
          </div>
      </div>
    </>;
  }
}

export default ProgressBar;
