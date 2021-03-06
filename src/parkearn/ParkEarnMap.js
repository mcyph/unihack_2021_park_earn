import React, { Component } from "react";
import FlexContainer from "../lib/controls/containers/flexbox/FlexContainer";
import FlexRow from "../lib/controls/containers/flexbox/FlexRow";
import FlexCol from "../lib/controls/containers/flexbox/FlexCol";
import Button from "../lib/controls/forms/controls/Button";
import ParkEarnTitleBar from "./ParkEarnTitleBar";
import { Formik, Field, Form } from "formik";
import Select from "../lib/controls/forms/controls/options/Select";
import Panel from "../lib/controls/containers/panel/Panel";
import PanelHeader from "../lib/controls/containers/panel/PanelHeader";
import PanelTitle from "../lib/controls/containers/panel/PanelTitle";
import PanelBody from "../lib/controls/containers/panel/PanelBody";
import PanelNav from "../lib/controls/containers/panel/PanelNav";
import PanelFooter from "../lib/controls/containers/panel/PanelFooter";
import Card from "../lib/controls/containers/card/Card";
import CardBody from "../lib/controls/containers/card/CardBody";
import CardHeader from "../lib/controls/containers/card/CardHeader";
import CardFooter from "../lib/controls/containers/card/CardFooter";
import CardImage from "../lib/controls/containers/card/CardImage";
import CardSubtitle from "../lib/controls/containers/card/CardSubtitle";
import CardTitle from "../lib/controls/containers/card/CardTitle";
import garagePic1 from "./garage.jpg";
import garagePic2 from "./garage2.jpg";

import "./ParkEarnMap.css";
class ParkEarnMap extends Component {
  constructor({}) {
    super({});
  }

  render() {
    return (
      <div className="container">
        <ParkEarnTitleBar items={["Rent", "Login", "Sign Up"]} />
        <FlexContainer>
          <FlexRow singleLine={true}>
            <FlexCol className="halves">
              <Formik
                initialValues={{
                  address: "enter address",
                  dateTime: "enter dateTime",
                }}
                onSubmit={async (values) => {
                  await new Promise((resolve) => setTimeout(resolve, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                <Form>
                  <Field name="address" type="text" />
                  <Field
                    name="dateTime"
                    type="text"
                    style={{ marginLeft: "10px" }}
                  />
                  <button type="search" style={{ marginLeft: "10px" }}>
                    Search
                  </button>
                </Form>
              </Formik>
              <p>
                <Card>
                  <FlexRow>
                    <FlexCol>
                      <CardImage>
                        <img
                          src={garagePic1}
                          style={{
                            width: "200px",
                            height: "100%",
                          }}
                          resizeMode={"contain"}
                        />
                      </CardImage>
                    </FlexCol>
                    <FlexCol>
                      <CardHeader>
                        <CardTitle>123 High Street</CardTitle>
                      </CardHeader>
                      <CardBody>12:00pm to 6:00pm</CardBody>
                    </FlexCol>
                  </FlexRow>
                </Card>{" "}
                <Card>
                  <FlexRow>
                    <FlexCol>
                      <CardImage>
                        <img
                          src={garagePic2}
                          style={{
                            width: "200px",
                            height: "100%",
                          }}
                          resizeMode={"contain"}
                        />
                      </CardImage>
                    </FlexCol>
                    <FlexCol>
                      <CardHeader>
                        <CardTitle>97 Springvale Road</CardTitle>
                      </CardHeader>
                      <CardBody>11:00pm to 6:00pm</CardBody>
                    </FlexCol>
                  </FlexRow>
                </Card>
              </p>
            </FlexCol>
            <FlexCol className="halves" defaultSize={3}>
              rightasdasdasdasdasdasdasd
            </FlexCol>
          </FlexRow>
        </FlexContainer>
      </div>
    );
  }
}

export default ParkEarnMap;
