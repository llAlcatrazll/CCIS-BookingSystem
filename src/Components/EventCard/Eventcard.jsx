import React from 'react'
import "./eventcard.css"
import { duration } from 'moment/moment';
import logo from '/src/assets/logo.png';
import sun from '/src/assets/sun.png';
import clock from '/src/assets/clock.png';
import calendar from '/src/assets/date.png';

const eventname = 'CCIS Acquaintance Party';
const description = 'A get to know college party';
const eventdate = 'December 02 2023';
const weekday = 'Saturday';
const eventstarttime = '4:00 PM';
const eventendtime = '9:00 PM';
const status = 'Pending';
const logoElement = <img src={logo} id='imagesizing' alt="Logo" />;
const sunElement = <img src={sun} id='imagesizing' alt="Logo" />;
const clockElement = <img src={clock} id='imagesizing' alt="Logo" />;
const calendarElement = <img src={calendar} id='imagesizing' alt="Logo" />;

export default function Eventcard() {
  return (
    <>
    <div id='eventcardbox'>
      <div id='test'>
        <div className='divrows' id='evnentame-decor'>{eventname}</div>
        {/* <div className='divrows'>{description}</div> */}

        {/* bottom nav info */}
        <div id='flex-container'>
          <div className='imagearrangement'>{clockElement}</div>
          <div>{eventstarttime}</div>
          <div>{eventendtime}</div>
          <div className='imagearrangement'>{calendarElement}</div>
          <div>{eventdate}</div>
          <div className='imagearrangement'>{sunElement}</div>
          <div>{weekday}</div>
        </div>

        </div>
    </div>
    </>
  )
}
