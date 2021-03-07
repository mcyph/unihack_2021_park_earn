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
import ParkEarnLogout from './parkearn/ParkEarnLogout';


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
            <Route path='/logout' component={ParkEarnLogout} exact/>
          </Switch>
        </div>
      </Router>
  </>;
}

export default App;
