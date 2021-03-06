import React, { Component } from "react";
import photo from "./garage.jpg";
import Form from "../lib/controls/forms/Form";
import SingleLineText from "../lib/controls/forms/controls/text/SingleLineText";
import FlexContainer from "../lib/controls/containers/flexbox/FlexContainer";
import FlexRow from "../lib/controls/containers/flexbox/FlexRow";
import FlexCol from "../lib/controls/containers/flexbox/FlexCol";
import RadioGroup from "../lib/controls/forms/controls/options/RadioGroup";
import Button from "../lib/controls/forms/controls/Button";

import ParkEarnTitleBar from "./ParkEarnTitleBar.js";
import "./ParkEarnRenterBooking.css";

class ParkEarnBooking extends Component {
  constructor({}) {
    super({});
  }

  render() {
    return (
      <>
        <ParkEarnTitleBar />
        <FlexContainer>
          <FlexRow>
            <FlexCol defaultSize={6}>
              <p className="garagePic">
                <img src={photo} alt="myGarage" className="photo" />
              </p>
              <p>Address: 123 High St</p>
            </FlexCol>
            <FlexCol defaultSize={6}>
              {" "}
              <Form
                onSubmit={(vals) => {
                  // TODO: Do something with the vals here!!!
                  alert(JSON.stringify(vals));
                }}
              >
                <h5 style={{ paddingBot: "15px" }}>Date</h5>
                <SingleLineText name="Date"></SingleLineText>

                <h5 style={{ paddingTop: "15px" }}>Time</h5>
                <FlexRow singleLine={true}>
                  <FlexCol defaultSize={3}>
                    <SingleLineText name="from">From</SingleLineText>
                  </FlexCol>
                  <FlexCol defaultSize={3}>
                    <SingleLineText name="to">To</SingleLineText>
                  </FlexCol>
                </FlexRow>
                <Button type={Button.TYPE.SUBMIT}>Book</Button>
              </Form>
            </FlexCol>
          </FlexRow>
        </FlexContainer>
      </>
    );
  }
}

export default ParkEarnBooking;
