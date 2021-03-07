import React, { Component } from "react";
import Hero from "../lib/controls/containers/Hero";
import FlexContainer from "../lib/controls/containers/flexbox/FlexContainer";
import FlexRow from "../lib/controls/containers/flexbox/FlexRow";
import FlexCol from "../lib/controls/containers/flexbox/FlexCol";
import Button from "../lib/controls/forms/controls/Button";
import ParkEarnTitleBar from "./ParkEarnTitleBar"
import { Formik, Field } from "formik";
import { auth } from "../firebase/index.js";
import Tabs from "../lib/controls/tabs/Tabs";
import TabItem from "../lib/controls/tabs/TabItem";
class ParkEarnSignup extends Component {
  constructor({ }) {
    super({ });
  }

  createUserWithEmailAndPasswordHandler = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('signed up')
    })
    .catch((error) => {
      console.log(error.code + ': ' + error.message)
    });
  };

  render() {
    return <>
      <ParkEarnTitleBar items={['Rent', 'Park', 'Login']} />

      <Hero size={ Hero.SIZE.LARGE } style={{ fontSize: "150%", textAlign: "center" }}>
        <FlexContainer>
          <FlexRow singleLine={true}>
            <FlexCol>
              <h1 style={{textAlign: "center"}}>Sign Up</h1>
              <FlexContainer>
                <Formik
                      initialValues={{ name: '', email: '', phone: '', password: '', confirmPassword: '', customerType: 'Renter'  }}
                      validate={values => {
                        const errors = {};

                        if (!values.name) {
                          errors.name = <p style={{color: 'red'}}>Required</p>;
                        }

                        if (!values.email) {
                          errors.email = <p style={{color: 'red'}}>Required</p>;
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                          errors.email = <p style={{color: 'red'}}>Invalid email address</p>;
                        }

                        if (!values.phone) {
                          errors.phone = <p style={{color: 'red'}}>Required</p>;
                        }

                        if (!values.password) {
                          errors.password = <p style={{color: 'red'}}>Required</p>;
                        }

                        if (values.password !== values.confirmPassword){
                          errors.confirmPassword = <p style={{color: 'red'}}>Passwords do not match</p>
                        }

                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        this.createUserWithEmailAndPasswordHandler(values.email, values.password)
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                      }) => (
                        <form onSubmit={handleSubmit}>

                          <Tabs style={{justifyContent: "center"}}>
                            <label className="form-label">I am a:&nbsp;&nbsp;</label>
                            <TabItem href="#" name="Customer"  active={true} />
                            <TabItem href="#" name="Renter" />
                          </Tabs>

                          {/*
                          <FlexRow style={{ justifyContent: "center" }}>
                            <div id="my-radio-group">
                              <label className="form-label">You are a</label>
                            </div>
                          </FlexRow>

                          <FlexRow style={{ justifyContent: "center", textAlign: "left" }}>
                            <div role="group" aria-labelledby="my-radio-group" style={{width: "5.5em", whiteSpace: "nowrap"}}>
                              <label>
                                <Field type="radio" name="customerType" value="Renter" />
                                {" "} Renter
                              </label><br/>
                              <label>
                                <Field type="radio" name="customerType" value="Customer" />
                                {" "} Customer
                              </label>
                            </div>
                          </FlexRow>
                          */}

                          <FlexRow style={{ justifyContent: "center" }}><label className="form-label">Name</label></FlexRow>
                          <FlexRow style={{ justifyContent: "center" }}><input
                            className="form-input"
                            style={{ maxWidth: "320px" }}
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          /></FlexRow>
                          {errors.name && touched.name && errors.name}

                          <FlexRow style={{ justifyContent: "center" }}><label className="form-label">Email</label></FlexRow>
                          <FlexRow style={{ justifyContent: "center" }}><input
                            className="form-input"
                            style={{ maxWidth: "320px" }}
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          /></FlexRow>
                          {errors.email && touched.email && errors.email}

                          <FlexRow style={{ justifyContent: "center" }}><label className="form-label">Phone</label></FlexRow>
                          <FlexRow style={{ justifyContent: "center" }}><input
                            className="form-input"
                            style={{ maxWidth: "320px" }}
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                          /></FlexRow>
                          {errors.phone && touched.phone && errors.phone}

                          <FlexRow style={{ justifyContent: "center" }}><label className="form-label">Password</label></FlexRow>
                          <FlexRow style={{ justifyContent: "center" }}><input
                            className="form-input"
                            style={{ maxWidth: "320px" }}
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          /></FlexRow>
                          {errors.password && touched.password && errors.password}

                          <FlexRow style={{ justifyContent: "center" }}><label className="form-label">Confirm Password</label></FlexRow>
                          <FlexRow style={{ justifyContent: "center" }}><input
                            className="form-input"
                            style={{ maxWidth: "320px" }}
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                          /></FlexRow>
                          {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}

                          <FlexCol style={{ justifyContent: "center" }}>
                            <Button type={Button.TYPE.SUBMIT}
                                    size={Button.SIZE.LARGE}
                                    color={Button.COLOR.PRIMARY}
                                    disabled={isSubmitting}>
                              Create Account
                            </Button>
                          </FlexCol>
                        </form>
                      )}
                  </Formik>
              </FlexContainer>
            </FlexCol>
          </FlexRow>
        </FlexContainer>
      </Hero>
    </>;
  }
}

export default ParkEarnSignup;
