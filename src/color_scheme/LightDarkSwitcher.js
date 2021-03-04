/**
This file is licensed under the MIT license

Copyright (c) 2020 David Morrissey

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

import React from 'react'
import Switch from 'react-switch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import cm from "./ColorManagement";


const LightDarkSwitcher = () => {
  const isLight =
    cm.getColorSchemeType() === cm.COLOR_SCHEME_LIGHT;
  const handleThemeChange = (e) => {
    cm.setColorSchemeType(isLight ? cm.COLOR_SCHEME_DARK : cm.COLOR_SCHEME_LIGHT);
  };

  return <div style={{
    display: "inline-block",
    marginLeft: "5px",
    verticalAlign: "middle"
  }}>
    <Switch
      className="react-switch"
      checked={!isLight}
      height={28}
      width={70}
      onColor="#666"
      offColor="#999"
      onHandleColor="#000"
      offHandleColor="#fff"
      checkedIcon={<FontAwesomeIcon icon={faSun} style={{
        color: "#fff",
        width: "28px",
        height: "24px",
        marginTop: "2px",
        verticalAlign: "top"
      }} />}
      uncheckedIcon={<FontAwesomeIcon icon={faMoon} style={{
        color: "#000",
        width: "52px",
        height: "24px",
        marginTop: "2px",
        verticalAlign: "top"
      }} />}
      onChange={handleThemeChange}
    />
  </div>;
};

export default LightDarkSwitcher;
