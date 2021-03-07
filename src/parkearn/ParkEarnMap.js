import React, { Component } from "react";
import FlexContainer from "../lib/controls/containers/flexbox/FlexContainer";
import FlexRow from "../lib/controls/containers/flexbox/FlexRow";
import FlexCol from "../lib/controls/containers/flexbox/FlexCol";
import Button from "../lib/controls/forms/controls/Button";
import ParkEarnTitleBar from "./ParkEarnTitleBar";
import { Formik, Field, Form } from "formik";
import Select from "../lib/controls/forms/controls/options/Select";
import Card from "../lib/controls/containers/card/Card";
import CardBody from "../lib/controls/containers/card/CardBody";
import CardHeader from "../lib/controls/containers/card/CardHeader";
import CardFooter from "../lib/controls/containers/card/CardFooter";
import CardImage from "../lib/controls/containers/card/CardImage";
import CardSubtitle from "../lib/controls/containers/card/CardSubtitle";
import CardTitle from "../lib/controls/containers/card/CardTitle";
import MapboxControl from "../lib/map/MapboxControl";
import garagePic1 from "./garage1.jpg";
import garagePic2 from "./garage3.jpg";
import garagePic3 from "./garage5.jpg";

import ParkEarnBooking from "./ParkEarnBooking";

import "./ParkEarnMap.css";
import GeoCoderControl from "../lib/map/mapbox/GeoCoderControl";
import MapSinglePoints from "./MapSinglePoints";

class ParkEarnMap extends Component {
  constructor({}) {
    super({});
  }
  state = {
    clicked: false,
    parkingList: [
      {
        address: "5 Murphy Street, Kew VIC 3101",
        title: "Driveway",
        rate: "$3.5/hr",
        picture: garagePic1,
      },
      {
        address: "2 Murphy Street, Kew VIC 3101",
        title: "Clean and spacious driveway",
        rate: "$4/hr",
        picture: garagePic2,
      },
      {
        address: "99 Stevenson Street, Kew VIC 3101",
        title: "Park in garage",
        rate: "$3.7/hr",
        picture: garagePic3,
      },
    ],
    authUser: JSON.parse(localStorage.getItem('authUser')),
  };

  render() {

    let items = this.state.authUser ? ['Rent', 'Dashboard', 'Logout'] : ["Rent", "Login", "Sign Up"]

    return (
      <div>
        {this.state.clicked ? (
          <>
            <ParkEarnBooking />{" "}
            <Button
              onClick={() => {
                this.setState({ clicked: false });
              }}
            >
              Back
            </Button>
          </>
        ) : (
          <div className="container">
            <ParkEarnTitleBar items={items} />
            <FlexContainer>
              <FlexRow singleLine={true}>
                <FlexCol className="halves" defaultSize={6}>
                  <Formik
                    initialValues={{
                      address: "",
                      dateTime: "",
                    }}
                    onSubmit={async (values) => {
                      await new Promise((resolve) => setTimeout(resolve, 500));
                      alert(JSON.stringify(values, null, 2));
                    }}
                  >
                    <Form>
                    <GeoCoderControl onResultSelected={result => console.log(JSON.stringify(result))}
                        onResults={results => console.log(JSON.stringify(results))}
                        style={{width: "170px", float: "left"}}/>
                      <Field
                        className="form-input"
                        name="address"
                        type="text"
                        placeholder="enter address"
                        style={{ maxWidth: "180px", float: "left", display: "none" }}
                      />
                      <Field
                        className="form-input"
                        name="dateTime"
                        type="text"
                        placeholder="enter date and time"
                        style={{
                          marginLeft: "10px",
                          maxWidth: "180px",
                          float: "left",
                        }}
                      />
                      <button
                        className="btn btn-primary"
                        type="search"
                        style={{ marginLeft: "10px" }}
                      >
                        Search
                      </button>
                    </Form>
                  </Formik>

                  <p style={{ marginTop: "15px" }}>
                    {this.state.parkingList.map((item) => (
                      <p>
                        <Button
                          onClick={() => {
                            this.setState({ clicked: true });
                          }}
                          style={{
                            height: "100%",
                            width: "100%",
                            marginLeft: "-10px",
                            marginTop: "8px",
                          }}
                          borderStyle={Button.BORDER_STYLE.LINK}
                        >
                          <Card>
                            <FlexRow singleLine={true}>
                              <FlexCol>
                                <CardImage>
                                  <img
                                    src={item.picture}
                                    style={{
                                      height: "100%",
                                      width: "100%",
                                    }}
                                    resizeMode={"contain"}
                                  />
                                </CardImage>
                              </FlexCol>
                              <FlexCol className="cardTextField">
                                <CardHeader>
                                  <CardTitle singleLine={false}>
                                    {item.title}
                                  </CardTitle>
                                  <CardSubtitle>{item.address}</CardSubtitle>
                                </CardHeader>
                                <CardBody>{item.rate}</CardBody>
                              </FlexCol>
                            </FlexRow>
                          </Card>
                        </Button>
                      </p>
                    ))}
                  </p>
                </FlexCol>
                <FlexCol className="halves" defaultSize={6}>
                  <MapSinglePoints points={[[145.7211998, -37.7840254]]} style={{ height: "35vh" }} />
                </FlexCol>
              </FlexRow>
            </FlexContainer>
          </div>
        )}
      </div>
    );
  }
}

export default ParkEarnMap;
