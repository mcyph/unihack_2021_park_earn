import React, { useState } from 'react';

import Calendar from "../../controls/forms/controls/datetime/Calendar";
import SevenDaySelector from "../../controls/forms/controls/datetime/SevenDaySelector";

let Calendars=()=>{
  const [sevenDaySelected, setSevenDaySelected] = useState([]);

  return <>
    <h2>Calendars</h2>
    <h3>Small Calendar</h3>
    <p>
      <Calendar currentDate={ new Date(2021, 3-1, 6) }
                onPrevMonth={ () => {} }
                onNextMonth={ () => {} }
                onChange={ newValue => {} }/>
    </p>
    <h3>Large Calendar</h3>
    <p>
      <Calendar currentDate={ new Date(2021, 3-1, 6) }
                size={ Calendar.SIZE_LARGE }
                onPrevMonth={ () => {} }
                onNextMonth={ () => {} }
                onChange={ newValue => {} }/>
    </p>
    <h3>Seven Day Selector</h3>
    <p>
      <SevenDaySelector currentDate={ new Date(2021, 3-1, 6) }
                        selected={ sevenDaySelected}
                        onSelect={ (item) => {
                          //alert(item);
                          let array = JSON.parse(JSON.stringify(sevenDaySelected));
                          const index = array.indexOf(item);
                          if (index > -1) { array.splice(index, 1); }
                          else { array.push(item); }
                          setSevenDaySelected(array);
                        }}
                        enabled={ ["2021/3/6 12:00", "2021/3/6 12:30"] }/>
    </p>
  </>;
}

export default Calendars;
