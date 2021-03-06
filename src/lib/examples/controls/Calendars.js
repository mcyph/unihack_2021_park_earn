import React, { useState } from 'react';

import Calendar from "../../controls/experimental/Calendar";

let Calendars=()=>{
  const [slider, setSlider] = useState(50);

  return <>
    <h2>Calendars</h2>
    <h3>Small Calendar</h3>
    <p>
      <Calendar year={2021}
                month={3}
                day={6}
                onChange={ newValue => {} }/>
    </p>
    <h3>Large Calendar</h3>
    <p>
      <Calendar size={Calendar.SIZE_LARGE}
                year={2021}
                month={3}
                day={6}
                onChange={ newValue => {} }/>
    </p>
  </>;
}

export default Calendars;
