import React, { Component } from "react";

import Navbar from "../lib/controls/navigation/navbar/Navbar";
import NavbarBrand from "../lib/controls/navigation/navbar/NavbarBrand";
import NavbarSection from "../lib/controls/navigation/navbar/NavbarSection";
import NavbarLink from "../lib/controls/navigation/navbar/NavbarLink";

/**
   *
   * @param items an array of strings, e.g. ['Rent', 'Park', 'Login', 'Sign Up']
   * to be displayed on top navbar on each page
   */
class ParkEarnBooking extends Component {
  constructor({ items }) {
    super({ items });
    items = items;
  }

  render() {
    return <>
      <Navbar>
        <NavbarSection>
          <NavbarBrand href="parkearn_landing">
            <img src={ process.env.PUBLIC_URL + "/logo192.png" }
                 style={{width: "64px", verticalAlign: "middle"}} />
          </NavbarBrand>
        </NavbarSection>
        <NavbarSection>
          {
            // create a navbar link for each item
            this.props.items.map( item => {
              return <NavbarLink href={`parkearn_${item.toLowerCase().replace(/\s/g,'')}`} style={{ fontSize: "130%" }}>{item}</NavbarLink>
            })
          }
        </NavbarSection>
      </Navbar>
    </>;
  }
}

export default ParkEarnBooking;



