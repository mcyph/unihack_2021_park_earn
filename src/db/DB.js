import initSqlJs from "sql.js";

const CREATE_RENTER_TABLE_SQL = `
  CREATE TABLE renter (
      id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      lat DOUBLE NOT NULL,
      lng DOUBLE NOT NULL,
      user_image TEXT,
      place_image TEXT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      phone TEXT NOT NULL,
      password TEXT NOT NULL
  );
`
const CREATE_CUSTOMER_TABLE_SQL = `
  CREATE TABLE customer (
      id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      phone TEXT NOT NULL,
      password TEXT NOT NULL
  );
`
const CREATE_BOOKING_TABLE_SQL = `
  CREATE TABLE booking (
      renter_id INTEGER NOT NULL,
      customer_id INTEGER NOT NULL,
      from_timeslot LONG NOT NULL,
      to_timeslot LONG NOT NULL
  );
  CREATE INDEX idx_booking 
      ON booking (renter_id, from_timeslot);
`;

class DB {
  init=async(runAfter)=>{
    // Must be explicitly called!
    let SQL = await initSqlJs();

    this.db = new SQL.Database();
    this.exec(CREATE_RENTER_TABLE_SQL);
    this.exec(CREATE_CUSTOMER_TABLE_SQL);
    this.exec(CREATE_BOOKING_TABLE_SQL);
    runAfter(this);
  }

  exec=(sql, params)=>{
    let out = [];
    for (let item of this.db.exec(sql, params).values()) {
      for (let i of item.values) {
        out.push(i);
      }
    }
    return out;
  }

  //==================================================//
  // Renters
  //==================================================//

  addRenter=(renter)=>{
    this.exec(`
      INSERT INTO renter(lat, lng, user_image, place_image, name, email, phone, password)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `, [
      renter['lat'], renter['lng'], renter['userImage'], renter['placeImage'],
      renter['name'], renter['email'], renter['phone'], renter['password']
    ]);
  }

  getRenterById=(id)=>{
    for (let i of this.getRenters()) {
      if (i.id === id) {
        return i;
      }
    }
    return null;
  }

  getRenters=()=>{
    return this.exec(`
      SELECT id, lat, lng, user_image, place_image, name, email, phone, password
      FROM renter;
    `).map(i => {
      return {
        id: i[0], lat: i[1], lng: i[2], userImage: i[3], placeImage: i[4],
        name: i[5], email: i[6], phone: i[7], password: i[8]
      }
    });
  }

  //==================================================//
  // Customers
  //==================================================//

  addCustomer=(i)=>{
    this.exec(`
      INSERT INTO customer(name, email, phone, password)
      VALUES (?, ?, ?, ?);
    `, [
      i['name'], i['email'], i['phone'], i['password']
    ]);
  }

  getCustomerById=(id)=>{
    for (let i of this.getCustomers()) {
      if (i.id === id) {
        return i;
      }
    }
    return null;
  }

  getCustomers=()=>{
    return this.exec(`
      SELECT id, name, email, phone, password
      FROM customer;
    `).map(i => {
      return {
        id: i[0], name: i[1], email: i[2], phone: i[3], password: i[4]
      }
    });
  }

  //==================================================//
  // Bookings
  //==================================================//

  addBooking=(i)=>{
    this.exec(`
      INSERT INTO booking(renter_id, customer_id, from_timeslot, to_timeslot)
      VALUES (?, ?, ?, ?);
    `, [
      i['renterId'], i['customerId'],
      this.__timeslotToTimestamp(i['fromTimeslot']),
      this.__timeslotToTimestamp(i['toTimeslot'])
    ]);
  }

  getBookingById=(id)=>{
    for (let i of this.getBookings()) {
      if (i.id === id) {
        return i;
      }
    }
    return null;
  }

  getBookings=()=>{
    return this.exec(`
      SELECT renter_id, customer_id, from_timeslot, to_timeslot
      FROM booking;
    `).map(i => {
      return {
        renterId: i[0], customerId: i[1],
        fromTimeslot: this.__timestampToTimeslot(i[2]),
        toTimeslot: this.__timestampToTimeslot(i[3])
      }
    });
  }

  __timeslotToTimestamp=(timeslot)=>{
    let [date, time] = timeslot.split(" ");
    let [yyyy, mm, dd] = date.split("/");
    let [hours, mins] = time.split(":");

    return new Date(
      parseInt(yyyy), parseInt(mm)-1, parseInt(dd),
      parseInt(hours), parseInt(mins)
    ).getTime();
  }

  __timestampToTimeslot=(timestamp)=>{
    let date = new Date(timestamp);
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  }
}

export default new DB();
