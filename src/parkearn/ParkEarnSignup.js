import React, { Component } from "react";
import Form from "../lib/controls/forms/Form";
import SingleLineText from "../lib/controls/forms/controls/text/SingleLineText";
import RadioGroup from "../lib/controls/forms/controls/options/RadioGroup";
import Button from "../lib/controls/forms/controls/Button";

class ParkEarnSignup extends Component {
  constructor({ }) {
    super({ });
  }

  render() {
    return <>
      <h1>Sign Up</h1>
      <Form onSubmit={(vals) => {
        // TODO: Do something with the vals here!!!
        alert(JSON.stringify(vals))
      }}>
        <SingleLineText name="name">Name</SingleLineText>
        <SingleLineText name="email">Email</SingleLineText>
        <SingleLineText name="phone">Phone</SingleLineText>
        <SingleLineText name="password">Password</SingleLineText>
        <RadioGroup name="customerType"
                    value="Renter"
                    options={["Renter", "Customer"]} />
        <Button type={Button.TYPE.SUBMIT}>
          Create Account
        </Button>
      </Form>
    </>;
  }
}

export default ParkEarnSignup;
