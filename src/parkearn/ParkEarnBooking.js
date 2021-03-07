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
import SevenDaySelector from "../lib/controls/forms/controls/datetime/SevenDaySelector";
import Card from "../lib/controls/containers/card/Card";
import MapboxControl from "../lib/map/MapboxControl";

class ParkEarnBooking extends Component {
  state = {};

  constructor({}) {
    super({});
  }

  render() {

    return (
      <>
        <ParkEarnTitleBar items={['Park', 'Dashboard', 'Logout']}/>
        <FlexContainer>
          <FlexRow>
            <FlexCol defaultSize={6}>
              <Card style={{ padding: "5% 4%", height: "auto" }} >
                <h3>Property Details</h3>
                <p className="garagePic">
                  <img src={photo} alt="myGarage" className="photo" style={{width: "100%", "height": "100%"}} />
                </p>
                <p>Address: 123 High St</p>
                <MapboxControl style={{height: "40vh"}}></MapboxControl>
              </Card>
            </FlexCol>
            <FlexCol defaultSize={6}>
              {" "}
              <Card style={{ padding: "5% 4%", height: "auto" }} >
                <h3>Select Times for Booking</h3>
                <p>Times which are available and open for booking are indicated in green.</p>

                <SevenDaySelector currentDate={ new Date(2021, 3-1, 6) }
                  selected={ this.state.selectedTimes||[] }
                  onSelect={ (item) => {
                    let array = JSON.parse(JSON.stringify(this.state.selectedTimes||[]));
                    const index = array.indexOf(item);
                    if (index > -1) { array.splice(index, 1); }
                    else { array.push(item); }
                    this.setState({selectedTimes: array});
                  }}
                  enabled={ ["2021/3/6 12:00", "2021/3/6 12:30"] }/>
                <Button type={Button.TYPE.SUBMIT}
                  size={Button.SIZE.LARGE}
                  color={Button.COLOR.PRIMARY}
                  style={{marginTop: "18px"}}>
                Book
              </Button>
              </Card>

            </FlexCol>
          </FlexRow>
        </FlexContainer>
      </>
    );
  }
}

export default ParkEarnBooking;
