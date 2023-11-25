import React from 'react'
import "./eventcard.css"
import { duration } from 'moment/moment';
import logo from '/src/assets/logo.png';
import sun from '/src/assets/sun.png';
import clock from '/src/assets/clock.png';
import calendar from '/src/assets/date.png';
import { useFetcher } from 'react-router-dom';

const logoElement = <img src={logo} id='imagesizing' alt="Logo" />;
const sunElement = <img src={sun} id='imagesizing' alt="Logo" />;
const clockElement = <img src={clock} id='imagesizing' alt="Logo" />;
const calendarElement = <img src={calendar} id='imagesizing' alt="Logo" />;
const temp = 'dsfdf';

// const eventname = 'CCIS adada Party';
// const description = 'A get to know college party';
// const eventdate = 'December 02 2023';
// const weekday = 'Saturday';
// const eventstarttime = '4:00 PM';
// const eventendtime = '9:00 PM';
// const status = 'Pending';


export default function Eventcard(data) {
  console.log(data)
  const { eventname,addressofEvent,purposeofEvent,status } = data.data;
  
  return (
    <>
    <div id='eventcardbox'>
      <div id='test'>
        <div id='flex-container'>
          <div id='leftdiv-flex'>
            <div></div>
            <div id='eventname-bold'>{eventname}</div>
            <div id='description-fade'>{addressofEvent}</div>
            <div></div>

          </div>
          <div>{purposeofEvent}</div>
          <div>{temp} - {temp}</div>
          
          <div id='status-card'>
            <div>{status }</div>
          <div id='circle'
          className={
            status == 'approved'? 'approved'
           :status== 'pending' ? 'pending' 
           :status == 'denied' ? 'denied' 
           :'error'}
          ></div>

          </div>
        </div>

        </div>
    </div>
    </>
  )
}
