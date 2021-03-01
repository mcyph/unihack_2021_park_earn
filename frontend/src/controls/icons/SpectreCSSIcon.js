import React from "react";

class SpectreCSSIcon extends React.Component {
  static SIZE = {
    TIMES_1: '',
    TIMES_2: 'icon-2x',
    TIMES_3: 'icon-3x',
    TIMES_4: 'icon-4x',
  }

  static NAVIGATION = {
    // Navigation icons
    ARROW_UP: "icon-arrow-up",
    ARROW_RIGHT: "icon-arrow-right",
    ARROW_DOWN: "icon-arrow-down",
    ARROW_LEFT: "icon-arrow-left",
    UPWARD: "icon-upward",
    FORWARD: "icon-forward",
    DOWNWARD: "icon-downward",
    BACK: "icon-back",
    CARET: "icon-caret",
    MENU: "icon-menu",
    APPS: "icon-apps",
    MORE_HORIZ: "icon-more-horiz",
    MORE_VERT: "icon-more-vert",
  }
  static ACTION = {
    // Action icons
    RESIZE_HORIZ: "icon-resize-horiz",
    RESIZE_VERT: "icon-resize-vert",
    PLUS: "icon-plus",
    MINUS: "icon-minus",
    CROSS: "icon-cross",
    CHECK: "icon-check",
    STOP: "icon-stop",
    SHUTDOWN: "icon-shutdown",
    REFRESH: "icon-refresh",
    SEARCH: "icon-search",
    FLAG: "icon-flag",
    BOOKMARK: "icon-bookmark",
    EDIT: "icon-edit",
    DELETE: "icon-delete",
    SHARE: "icon-share",
    DOWNLOAD: "icon-download",
    UPLOAD: "icon-upload",
    COPY: "icon-copy",
  }
  static OBJECT = {
    // Object icons
    MAIL: "icon-mail",
    PEOPLE: "icon-people",
    MESSAGE: "icon-message",
    PHOTO: "icon-photo",
    TIME: "icon-time",
    LOCATION: "icon-location",
    LINK: "icon-link",
    EMOJI: "icon-emoji",
  }

  constructor({ icon, size, style }) {
    super({ icon, size, style });
  }

  render() {
    let className = "icon";
    className += " " + (this.props.size||'');
    className += " " + this.props.icon;
    return <>
      <i className={ className }
         style={ this.props.style }/>
    </>;
  }
}

export default SpectreCSSIcon;
