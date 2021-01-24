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
import Button from "./Button";

class DialogButtons extends Component {
  static ALIGN = {
    LEFT: 0, RIGHT: 1,
    CENTRE: 2, CENTER: 2
  };
  static WIDTH = {
    AUTO: 0,
  };

  static TYPES = {
    SEPARATOR: null,

    // Defaults with "OK" and "Yes" emphasized over "Cancel" and "No"
    // This assumes the actions aren't "dangerous" and should encourage
    // the user to think before pressing
    OK: ['btn-primary', 'OK'],
    CANCEL: [null, 'Cancel'],
    YES: ['btn-primary', 'Yes'],
    NO: [null, 'No'],

    OK_PRIMARY: ['btn-primary', 'OK'],
    CANCEL_PRIMARY: ['btn-primary', 'Cancel'],
    YES_PRIMARY: ['btn-primary', 'Yes'],
    NO_PRIMARY: ['btn-primary', 'No'],

    OK_SECONDARY: [null, 'OK'],
    CANCEL_SECONDARY: [null, 'Cancel'],
    YES_SECONDARY: [null, 'Yes'],
    NO_SECONDARY: [null, 'No'],

    CLOSE: ['btn-primary', 'Close'],
    APPLY: ['btn-primary', 'Apply'],
    HELP: [null, 'Help'],
    NEXT: ['btn-primary', 'Next'],
    PREVIOUS: [null, 'Previous'],
    REVERT: [null, 'Revert'],

    ADD: ['btn-primary', 'Add'],
    DELETE: [null, 'Delete'],
    REMOVE: [null, 'Remove'],
  };

  /**
   *
   * @param buttons
   * @param align
   * @param onButtonClick
   */
  constructor({ buttonTypes, align, width, onButtonClick }) {
    super({ buttonTypes, align, width, onButtonClick });
  }

  setEnabled(enabled, buttonId) {
    // TODO!
  }

  render() {
    let buttons = [];
    for (let buttonType of this.props.buttonTypes) {
      if (buttonType == null) {
        // TODO!
      } else {
        // icon??
        buttons.push(
            <Button
                className
                title={ buttonType[1] }
            />
        );
      }
    }
    return <FIXME>
      { buttons }
    </FIXME>;
  }
}

export default DialogButtons;
