import './App.css';

import "./lib/spectre/spectre_css_light/spectre.scss";
import "./lib/spectre/spectre_css_light/spectre-exp.scss";
import "./lib/spectre/spectre_css_light/spectre-icons.scss";

// To use a dark theme, comment out the
// scss files above and uncomment the below!
//import "./lib/spectre/spectre_css_dark/spectre.scss";
//import "./lib/spectre/spectre_css_light/spectre-exp.scss";
//import "./lib/spectre/spectre_css_light/spectre-icons.scss";

import Example from "./Example";

import db from './db/DB';
import ParkEarnLanding from './parkearn/ParkEarnLanding';
import ParkEarnLogin from './parkearn/ParkEarnLogin';
import ParkEarnSignup from './parkearn/ParkEarnSignup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ParkEarnBooking from './parkearn/ParkEarnBooking';
import ParkEarnRenterDash from './parkearn/ParkEarnRenterDash';
import ParkEarnMap from './parkearn/ParkEarnMap';

db.init((db) => {
  db.addCustomer({
    name: "name", email: "name@example.com", phone: "5553210", password: "password"
  });
  db.addRenter({
    lat: 55.5, lng: 90.5, userImage: null, placeImage: null,
    name: "Joe Bloggs", email: "name@example.com", phone: "5553210", password: "password"
  });
  db.addBooking({
    renterId: 1, customerId: 1, fromTimeslot: "2021/3/6 12:00", toTimeslot: "2021/3/6 12:30"
  })
  console.log(db.getCustomers());
  console.log(db.getRenters());
  console.log(db.getBookings());
});


function App() {
  // Replace the below lines with your own content!
  return <>
    {/* <Example /> */}
    <Router>
        <div className="App">
          <Switch>
            <Route path='/' component={ParkEarnLanding} exact/>
            <Route path='/login' component={ParkEarnLogin} exact />
            <Route path='/signup' component={ParkEarnSignup} exact/>
            <Route path='/rent' component={ParkEarnBooking} exact/>
            <Route path='/dashboard' component={ParkEarnRenterDash} exact/>
            <Route path='/park' component={ParkEarnMap} exact/>
          </Switch>
        </div>
      </Router>
  </>;
}

export default App;
