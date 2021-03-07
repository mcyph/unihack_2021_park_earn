import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase";

export default class ParkEarnLogout extends Component {

    constructor({ }) {
        super({ });
        auth.signOut().then(() => {
            // Sign-out successful.
            alert('Logged Out Successfully!')
        }).catch((error) => {
            // An error happened.
            alert(error.name + ': ' + error.message)
        });
        localStorage.removeItem('authUser')
    }

    render(){
        return <Redirect to="/"/>
    }

}