import React, { Component } from "react";
import photo from "./garage.jpg";
import FlexContainer from "../lib/controls/containers/flexbox/FlexContainer";
import FlexRow from "../lib/controls/containers/flexbox/FlexRow";
import FlexCol from "../lib/controls/containers/flexbox/FlexCol";
import Button from "../lib/controls/forms/controls/Button";

import ParkEarnTitleBar from "./ParkEarnTitleBar.js";
import "./ParkEarnRenterBooking.css";
import SevenDaySelector from "../lib/controls/forms/controls/datetime/SevenDaySelector";
import Card from "../lib/controls/containers/card/Card";
import MapSinglePoints from "./MapSinglePoints";

class ParkEarnBooking extends Component {
  state = {
    authUser: JSON.parse(localStorage.getItem('authUser')),
  };

  constructor({}) {
    super({});
  }

  render() {

    let items = this.state.authUser ? ['Park', 'Dashboard', 'Logout'] : ["Park", "Login", "Sign Up"]

    return (
      <>
        <ParkEarnTitleBar items={items}/>
        <FlexContainer>
          <FlexRow>
            <FlexCol defaultSize={6}>
              <Card style={{ padding: "5% 4%", height: "auto" }} >
                <h3>Property Details</h3>
                <p className="garagePic">
                  <img src={photo} alt="myGarage" className="photo" style={{width: "100%", "height": "100%"}} />
                </p>
                <p>Address: 123 High St</p>
                <MapSinglePoints points={[[145.7211998, -37.7840254]]} style={{ height: "40vh" }} />
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
