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

class Avatar extends Component {
  static PARAMS = {
    badge: Param(BOOLEAN, false)
  };

  static PRESENCE = {
    ONLINE: 'online',
    OFFLINE: '',
    BUSY: 'busy',
    AWAY: 'away'
  };
  static SIZE = {
    EXTRA_SMALL: 'avatar-xs', // 16px
    SMALL: 'avatar-sm',       // 24px
    MEDIUM: 'avatar',         // 32px (default)
    LARGE: 'avatar-lg',       // 48px
    EXTRA_LARGE: 'avatar-xl'  // 64px
  };

  /**
   *
   * @param size
   * @param imgSrc
   * @param initials
   * @param badge
   * @param presence
   * @param icon
   * @param iconAlt
   */
  constructor({ size, imgSrc, initials,
                badge, presence, icon, iconAlt }) {

    size = size || Avatar.SIZE.MEDIUM;

    if (!(new Set([
      Avatar.PRESENCE.ONLINE,
      Avatar.PRESENCE.OFFLINE,
      Avatar.PRESENCE.BUSY,
      Avatar.PRESENCE.AWAY
    ])).has(presence)) {
      throw new Error("presence must be one of: online, busy, away");
    }

    super({ size, imgSrc, initials,
            badge, presence, icon, iconAlt });
  }

  render() {
    return (
      <figure className="avatar badge"
              data-badge={ this.props.badge }
              data-initial={ this.props.initials }>
        { this.props.imgSrc ? <img src={ this.props.imgSrc }
                                   alt={ this.props.initials } /> : '' }
        { this.props.presence ? <i className={`avatar-presence ${this.props.presence}`} /> : ''}
        { this.props.icon ? <img src={ this.props.icon }
                                 className="avatar-icon"
                                 alt={ this.props.iconAlt } /> : '' }
      </figure>
    );
  }
}

export default Avatar;
