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
    <Example />
  </>;
}

export default App;
