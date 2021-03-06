import React, { Component } from "react";
import Hero from "../lib/controls/containers/Hero";
import FlexContainer from "../lib/controls/containers/flexbox/FlexContainer";
import FlexRow from "../lib/controls/containers/flexbox/FlexRow";
import FlexCol from "../lib/controls/containers/flexbox/FlexCol";
import Button from "../lib/controls/forms/controls/Button";
import ParkEarnTitleBar from "./ParkEarnTitleBar"
import { Formik } from "formik";
import { auth } from "../firebase/index.js";
class ParkEarnLogin extends Component {
  constructor({ }) {
    super({ });
  }

  signInWithEmailAndPasswordHandler = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert('logged in')
    })
    .catch(error => {
      var errorCode = error.code;
      if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found'){
          alert('wrong email or password')
      }
    });
  };

  render() {
    return <>
      <ParkEarnTitleBar items={['Rent', 'Park', 'Sign Up']} />

      <Hero size={ Hero.SIZE.LARGE } style={{ fontSize: "150%", textAlign: "center" }}>
        <FlexContainer>
          <FlexRow singleLine={true}>
            <FlexCol>
              <h1>Login</h1>
              <FlexContainer>
                <Formik
                      initialValues={{ email: '', password: '' }}
                      validate={values => {
                        const errors = {};
                        if (!values.email) {
                          errors.email = <p style={{color: 'red'}}>Required</p>;
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                          errors.email = <p style={{color: 'red'}}>Invalid email address</p>;
                        }

                        if (!values.password) {
                          errors.password = <p style={{color: 'red'}}>Required</p>;
                        }
                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        this.signInWithEmailAndPasswordHandler(values.email, values.password)
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
                          <FlexRow style={{ paddingLeft: "25%", }}>Email</FlexRow>
                          <FlexRow style={{ paddingLeft: "25%", }}><input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          /></FlexRow>
                          {errors.email && touched.email && errors.email}
                          <FlexRow style={{ paddingLeft: "25%", }}>Password</FlexRow>
                          <FlexRow style={{ paddingLeft: "25%", }}><input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          /></FlexRow>
                          {errors.password && touched.password && errors.password}
                          <FlexCol>
                            <Button type={Button.TYPE.SUBMIT} disabled={isSubmitting}>
                              Login
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

export default ParkEarnLogin;
