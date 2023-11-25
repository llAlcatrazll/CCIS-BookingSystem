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
const temp1 = '2:00';
const temp2 = '4:00';

/*
READ ME!
  This basically displays all the events booked by the user

  data to be passed is
  eventname ="acquaintance Party";
  facilityName = "Gymnasium";
  purposeofEvent = "Get to Know";
  startofEvent: "2023-11-24T16:00"
  endofEvent: "2023-11-24T20:30"

  **Note current data format is to be formatted to standard 12hours AM-PM format on the database for easier reading in the frontend
      2023-11-24T20:30   To    8:30 PM
  **

these data are taken from the ./Createbooking.jsx  

Features:
  Filter function
      By Month
      By Semester
      By Week
      By Facility
      Sort by (Name, Data, FacilityName)
*/
export default function Eventcard(data) {
  console.log(data)
  const { eventname,facilityName,purposeofEvent,status, startofEvent,endofEvent } = data.data;
  
  return (
    <>
    <div id='eventcardbox'>
      <div id='test'>
        <div id='flex-container'>
          <div id='leftdiv-flex'>
            <div></div>
            <div id='eventname-bold'>{eventname}</div>
            <div id='description-fade'>{purposeofEvent}</div>
            <div></div>

          </div>
          <div>{facilityName}</div>
          <div>{temp1} - {temp2}</div>
          
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
