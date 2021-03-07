import React, { Component } from "react";
import Hero from "../lib/controls/containers/Hero";
import FlexContainer from "../lib/controls/containers/flexbox/FlexContainer";
import FlexRow from "../lib/controls/containers/flexbox/FlexRow";
import FlexCol from "../lib/controls/containers/flexbox/FlexCol";
import HeatmapCartesian from "../lib/charts/HeatmapCartesian"

import ParkEarnTitleBar from "./ParkEarnTitleBar"
import photo from "./garage.jpg";

import Timeline from "../lib/controls/containers/timeline/Timeline";
import TimelineContent from "../lib/controls/containers/timeline/TimelineContent";
import TimelineIcon from "../lib/controls/containers/timeline/TimelineIcon";
import TimelineLeft from "../lib/controls/containers/timeline/TimelineLeft";
import TimelineItem from "../lib/controls/containers/timeline/TimelineItem";
import Card from "../lib/controls/containers/card/Card";
import SevenDaySelector from "../lib/controls/forms/controls/datetime/SevenDaySelector";

class ParkEarnRenterDash extends Component {
  state = {};

  constructor({ }) {
    super({});
  }

  render() {
    return <>

      <ParkEarnTitleBar items={['Rent', 'Park']} />

      <Hero size={Hero.SIZE.LARGE}
        style={{ fontSize: "100%", textAlign: "left", padding:"2.5% 0" }}>
        <FlexContainer>
          <FlexRow singleLine={true}>
            <FlexCol>
              <h1>Hi Renter</h1>
            </FlexCol>
          </FlexRow>

          <FlexRow singleLine={true}>
            <FlexCol>
              <h3>Your Driveway Information</h3>
            </FlexCol>
          </FlexRow>

          <FlexRow singleLine={true}>
            <FlexCol defaultSize={2}>
              <img src={photo} alt="myGarage" className="photo" />
            </FlexCol>

            <FlexCol defaultSize={5}>
              <p>
                <div style={{ whiteSpace: "nowrap", fontWeight: "bold" }}>Location</div>
                <div style={{ whiteSpace: "nowrap" }}>123 High St Melbourne VIC 3000</div>
                <div style={{ whiteSpace: "nowrap", fontWeight: "bold" }}>Rate</div>
                <div style={{ whiteSpace: "nowrap" }}>$4/hour</div>
              </p>
            </FlexCol>

            <FlexCol defaultSize={5}>
              <p>
                <div style={{ whiteSpace: "nowrap", fontWeight: "bold" }}>Earnings (Standard)</div>
                <div style={{ whiteSpace: "nowrap" }}>$150</div>
                <div style={{ whiteSpace: "nowrap", fontWeight: "bold" }}>Earnings (Penalty)</div>
                <div style={{ whiteSpace: "nowrap" }}>50</div>
              </p>
            </FlexCol>

          </FlexRow>

          <FlexRow singleLine={true}>
            <FlexCol>
              {/*
              <FlexRow style={{margin: "5% 0"}}>
                <Card style={{ padding: "5% 4%" }} >
                  <h3>Availability</h3>

                  <Timeline style={{marginTop: "25px", overflow: "hidden", paddingBottom: "4px"}}>
                    <TimelineItem style={{marginBottom: "0px"}}>
                      <TimelineLeft><TimelineIcon /></TimelineLeft>
                      <TimelineContent>Monday 14 Feb<br/><ul style={{padding: 0, margin: 0}}><li>08.00-18.00</li></ul></TimelineContent>
                    </TimelineItem>
                    <TimelineItem style={{marginBottom: "0px"}}>
                      <TimelineLeft><TimelineIcon /></TimelineLeft>
                      <TimelineContent>Sunday 15 Feb<br/><ul style={{padding: 0, margin: 0}}><li>08.00-18.00</li></ul></TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Card>
              </FlexRow>
              */}

              <FlexRow style={{margin: "5% 0"}}>
                <Card style={{ padding: "5% 4%" }} >
                  <h3>Upcoming Bookings</h3>

                  <Timeline style={{marginTop: "25px", overflow: "hidden", paddingBottom: "4px"}}>
                    <TimelineItem style={{marginBottom: "0px"}}>
                      <TimelineLeft><TimelineIcon /></TimelineLeft>
                      <TimelineContent>Sunday 14 Feb<br/><ul style={{padding: 0, margin: 0}}><li>9:00 - 11:30</li><li>14:00 - 16:00</li></ul></TimelineContent>
                    </TimelineItem>
                    <TimelineItem style={{marginBottom: "0px"}}>
                      <TimelineLeft><TimelineIcon /></TimelineLeft>
                      <TimelineContent>Monday 15 Feb<br/><ul style={{padding: 0, margin: 0}}><li>08:00 - 08:30</li></ul></TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Card>
              </FlexRow>
              <Card style={{ padding: "5% 4%", height: "auto" }} >
                <h3>Availability</h3>
                <SevenDaySelector currentDate={ new Date(2021, 3-1, 6) }
                    selected={ this.state.selectedTimes||[] }
                    onSelect={ (item) => {
                      let array = JSON.parse(JSON.stringify(this.state.selectedTimes||[]));
                      const index = array.indexOf(item);
                      if (index > -1) { array.splice(index, 1); }
                      else { array.push(item); }
                      this.setState({selectedTimes: array});
                    }}
                    disabled={ ["2021/3/6 12:00", "2021/3/6 12:30"] }/>
              </Card>
            </FlexCol>

            <FlexCol>
              <Card style={{height: "auto"}}>
                <h3 style={{padding: "25px 0 0 23px"}}>Weekly Statistics</h3>
                <HeatmapCartesian
                  data={[[0,0,0],[0,1,1],[0,2,1],[0,3,0],[0,4,0],[0,5,0],[0,6,0],
                    [0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,1],[0,12,1],[0,13,1],
                    [0,14,1],[0,15,1],[0,16,1],[0,17,0],[0,18,0],[0,19,0],
                    [0,20,0],[0,21,1],[0,22,1],[0,23,1],[1,0,1],[1,1,1],[1,2,1],
                    [1,3,1],[1,4,1],[1,5,1],[1,6,1],[1,7,1],[1,8,1],[1,9,1],
                    [1,10,0],[1,11,0],[1,12,0],[1,13,0],[1,14,0],[1,15,0],
                    [1,16,1],[1,17,0],[1,18,0],[1,19,1],[1,20,0],[1,21,0],
                    [1,22,0],[1,23,0],[2,0,0],[2,1,0],[2,2,0],[2,3,0],[2,4,0],
                    [2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,1],[2,11,1],
                    [2,12,1],[2,13,1],[2,14,1],[2,15,1],[2,16,1],[2,17,1],
                    [2,18,1],[2,19,0],[2,20,1],[2,21,1],[2,22,0],[2,23,0],
                    [3,0,0],[3,1,0],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],
                    [3,7,0],[3,8,0],[3,9,0],[3,10,0],[3,11,0],[3,12,0],[3,13,0],
                    [3,14,0],[3,15,0],[3,16,0],[3,17,0],[3,18,0],[3,19,0],
                    [3,20,0],[3,21,0],[3,22,0],[3,23,0],[4,0,0],[4,1,0],[4,2,0],
                    [4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,0],
                    [4,10,0],[4,11,0],[4,12,0],[4,13,1],[4,14,0],[4,15,0],
                    [4,16,0],[4,17,1],[4,18,0],[4,19,0],[4,20,0],[4,21,0],
                    [4,22,0],[4,23,0],[5,0,1],[5,1,1],[5,2,0],[5,3,0],[5,4,0],
                    [5,5,0],[5,6,0],[5,7,0],[5,8,0],[5,9,0],[5,10,1],[5,11,1],
                    [5,12,1],[5,13,1],[5,14,1],[5,15,1],[5,16,1],[5,17,0],
                    [5,18,0],[5,19,1],[5,20,1],[5,21,0],[5,22,0],[5,23,0],
                    [6,0,0],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],
                    [6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,1],[6,13,1],
                    [6,14,1],[6,15,1],[6,16,0],[6,17,0],[6,18,0],[6,19,0],
                    [6,20,1],[6,21,1],[6,22,1],[6,23,1]]}
                  style={{ height: "70vh", margin:"0%" }} />
              </Card>
            </FlexCol>

          </FlexRow>
        </FlexContainer>
      </Hero>



    </>;
  }
}

export default ParkEarnRenterDash;
