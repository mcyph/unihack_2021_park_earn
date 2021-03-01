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
import Button from "../Button";
import FlexColumn from "../../../containers/flexbox/FlexColumn";
import FlexRow from "../../../containers/flexbox/FlexRow";
import FlexContainer from "../../../containers/flexbox/FlexContainer";

class DialogButtons extends Component {
  static ALIGN = {
    LEFT: 0,
    RIGHT: 1,
    CENTRE: 2,
    CENTER: 2
  };
  static WIDTH = {
    AUTO: 0,
    BLOCK: 1
  };
  static TYPES = {
    SEPARATOR: null,

    // Defaults with "OK" and "Yes" emphasized over "Cancel" and "No"
    // This assumes the actions aren't "dangerous" and should encourage
    // the user to think before pressing
    OK: [Button.COLOR.PRIMARY, 'OK'],
    CANCEL: [null, 'Cancel'],
    YES: [Button.COLOR.PRIMARY, 'Yes'],
    NO: [null, 'No'],

    OK_PRIMARY: [Button.COLOR.PRIMARY, 'OK'],
    CANCEL_PRIMARY: [Button.COLOR.PRIMARY, 'Cancel'],
    YES_PRIMARY: [Button.COLOR.PRIMARY, 'Yes'],
    NO_PRIMARY: [Button.COLOR.PRIMARY, 'No'],

    OK_SECONDARY: [null, 'OK'],
    CANCEL_SECONDARY: [null, 'Cancel'],
    YES_SECONDARY: [null, 'Yes'],
    NO_SECONDARY: [null, 'No'],

    CLOSE: [Button.COLOR.PRIMARY, 'Close'],
    APPLY: [Button.COLOR.PRIMARY, 'Apply'],
    HELP: [null, 'Help'],
    NEXT: [Button.COLOR.PRIMARY, 'Next'],
    PREVIOUS: [null, 'Previous'],
    REVERT: [null, 'Revert'],

    ADD: [Button.COLOR.PRIMARY, 'Add'],
    DELETE: [null, 'Delete'],
    REMOVE: [null, 'Remove'],
  };

  /**
   *
   * @param buttonTypes
   * @param onClick
   * @param align one of:
   *        * `DialogButtons.ALIGN.LEFT`
   *        * `DialogButtons.ALIGN.RIGHT`
   *        * `DialogButtons.ALIGN.CENTER`
   *        * `DialogButtons.ALIGN.CENTRE`
   * @param containerWidth one of:
   *        * FIXME
   * @param buttonWidth one of:
   *        * FIXME
   * @param buttonSize one of:
   *        * `Button.SIZE.DEFAULT`
   *        * `Button.SIZE.BLOCK`
   *        * `Button.SIZE.FULLWIDTH`
   *        * `Button.SIZE.SMALL`
   *        * `Button.SIZE.LARGE`
   */
  constructor({ buttonTypes, onClick,
                align, containerWidth, buttonWidth, buttonSize }) {
    super({ buttonTypes, onClick,
            align, containerWidth, buttonWidth, buttonSize });
  }

  render() {
    let buttons = [];
    let buttonSize = ('buttonSize' in this.props && this.props.buttonSize != null) ?
        this.props.buttonSize : Button.SIZE.DEFAULT;

    let xx = 0
    for (let buttonType of this.props.buttonTypes) {
      let nextItemSeparator = this.props.buttonTypes[xx+1] == null;

      if (buttonType == null) {
        // A special case (separator) which
        // adds a margin to the right hand side
      } else if (this.__isArray(buttonType)) {
        // icon??
        buttons.push(
          <FlexColumn margin={
            nextItemSeparator ?
                FlexColumn.MARGIN.RIGHT : FlexColumn.MARGIN.NONE
          }>
            <Button
              color={buttonType[0]}
              size={buttonSize}
              onClick={(id, evt) => {
                if (this.props.onClick) {
                  return this.props.onClick(id, evt)
                }
              }}
            >
              { buttonType[1] }
            </Button>
          </FlexColumn>
        );
      } else if (this.__isLiteralObject(buttonType)) {
        // {type: [type], ...} format
        buttons.push(
          <FlexColumn margin={
            nextItemSeparator ?
                FlexColumn.MARGIN.RIGHT : FlexColumn.MARGIN.NONE
          }>
            <Button
              color={'color' in buttonType ? buttonType.color : buttonType.type[0]}
              state={'state' in buttonType ? buttonType.state : null}
              borderStyle={'borderStyle' in buttonType ? buttonType.borderStyle : null}
              size={'buttonSize' in buttonType ? buttonType.buttonSize : buttonSize}
              leftIcon={buttonType.leftIcon}
              rightIcon={buttonType.rightIcon}
              badge={buttonType.badge}
              style={buttonType.style}
              onClick={(id, evt) => {
                if (this.props.onClick) {
                  return this.props.onClick(id, evt)
                }
              }}
            >
              { buttonType.type[1] }
            </Button>
          </FlexColumn>
        );
      } else {
        // a JSX element?
        buttons.push(
          <FlexColumn margin={
            nextItemSeparator ?
                FlexColumn.MARGIN.RIGHT : FlexColumn.MARGIN.NONE
          }>
            { buttonType }
          </FlexColumn>
        );
      }

      xx += 1;
    }
    return <FlexContainer>
      <FlexRow>
        { buttons }
      </FlexRow>
    </FlexContainer>;
  }

  __isArray(a) {
    return (!!a) && (a.constructor === Array);
  }
  __isLiteralObject(a) {
    return (!!a) && (a.constructor === Object);
  }
}

export default DialogButtons;
