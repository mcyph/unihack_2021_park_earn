import React, { Component } from "react";
import Form from "../lib/controls/forms/Form";
import SingleLineText from "../lib/controls/forms/controls/text/SingleLineText";
import RadioGroup from "../lib/controls/forms/controls/options/RadioGroup";
import Button from "../lib/controls/forms/controls/Button";

class ParkEarnLogin extends Component {
  constructor({ }) {
    super({ });
  }

  render() {
    return <>
      <h1>Login</h1>
      <Form onSubmit={(vals) => {
        // TODO: Do something with the vals here!!!
        alert(JSON.stringify(vals))
      }}>
        <SingleLineText name="email">Email</SingleLineText>
        <SingleLineText name="password">Password</SingleLineText>
        <Button type={Button.TYPE.SUBMIT}>Login</Button>
      </Form>
    </>;
  }
}

export default ParkEarnLogin;
