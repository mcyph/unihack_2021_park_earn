import React, { Component } from "react";

import Navbar from "../lib/controls/navigation/navbar/Navbar";
import NavbarBrand from "../lib/controls/navigation/navbar/NavbarBrand";
import NavbarSection from "../lib/controls/navigation/navbar/NavbarSection";
import NavbarLink from "../lib/controls/navigation/navbar/NavbarLink";

class ParkEarnBooking extends Component {
  constructor({ }) {
    super({ });
  }

  render() {
    return <>
      <Navbar>
        <NavbarSection>
          <NavbarBrand href="/">
            <img src={ process.env.PUBLIC_URL + "/logo192.png" }
                 style={{width: "64px", verticalAlign: "middle"}} />
          </NavbarBrand>
        </NavbarSection>
        <NavbarSection>
          <NavbarLink href="/rent" style={{ fontSize: "130%" }}>Rent</NavbarLink>
          <NavbarLink href="/park" style={{ fontSize: "130%" }}>Park</NavbarLink>
          <NavbarLink href="/login" style={{ fontSize: "130%" }}>Login</NavbarLink>
          <NavbarLink href="/sign_up" style={{ fontSize: "130%" }}>Sign Up</NavbarLink>
        </NavbarSection>
      </Navbar>
    </>;
  }
}

export default ParkEarnBooking;



