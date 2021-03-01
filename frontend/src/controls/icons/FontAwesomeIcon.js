import React from "react";

class FontAwesomeIcon extends React.Component {
  static SOLID = "fas";
  static BRANDS = "fab";
  static REGULAR = "far";

  static SIZE = {
    EXTRA_SMALL: "fa-xs",
    SMALL: "fa-sm",
    LARGE: "fa-lg",
    TIMES_2: "fa-2x",
    TIMES_3: "fa-3x",
    TIMES_4: "fa-4x",
    TIMES_5: "fa-5x",
    TIMES_6: "fa-6x",
    TIMES_7: "fa-7x",
    TIMES_8: "fa-8x",
    TIMES_9: "fa-9x",
    TIMES_10: "fa-10x"
  };

  constructor({ iconSet, icon, size, style }) {
    super({ iconSet, icon, size, style });
  }

  render() {
    let className = this.props.iconSet;
    className += " fa-" + this.props.icon;
    className += " " + (this.props.size||"");
    return <>
      <i className={ className }
         style={ this.props.style }/>
    </>;
  }
}

export default FontAwesomeIcon;
