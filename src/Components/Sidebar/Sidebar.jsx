import { Link, Navigate, useNavigate } from "react-router-dom";
import "./sidebar.css"
import Calendar from "../Calendar/Calendar";
import Meetinglist from "../Meetinglist/Meetinglist";
import Createbooking from "../CreateBooking/Createbooking";


import { useState } from "react";



export default function Sidebar() {

    //  Current Finished Pages
    //      MeetingList ~
    //      Createbooking /

    const [activityCalendar, setActivityCalendar] = useState(false);
    const [bookingHistory, setBookingHistory] = useState(false);
    const [bookingManagement, setBookingManagement] = useState(false);
    const [createBooking, setCreateBooking] = useState(true);
  
    const handlePageChange = (selectedValue) => {
      setActivityCalendar(selectedValue === 'calendar');
      setBookingHistory(selectedValue === 'history');
      setBookingManagement(selectedValue === 'management');
      setCreateBooking(selectedValue === 'create');
    }
  
    return (
      <>
        <div id="adaaddsadds">
          <div id="sidebarbox">
            <img id="loginimage" src="/src/assets/logo.png" alt="cannot render" />
            <ul id="sidebar-listitems">
              <li className="list-items extra" onClick={() => handlePageChange('calendar')}>
                Activity Calendar
              </li>
              <li className="list-items extra" onClick={() => handlePageChange('history')}>
                Booking History
              </li>
              <li className="list-items extra" onClick={() => handlePageChange('management')}>
                Booking Management
              </li>
              <li className="list-items extra" onClick={() => handlePageChange('create')}>
                Create Booking
              </li>
            </ul>
  
           
            <div id="spacer"></div>
            <Link to={'/'} ><button>Log Out</button></Link>
          </div>
          {activityCalendar && <Calendar />}
            {bookingHistory && <Calendar />}
            {/* replace calendar with a functional component */}
            {bookingManagement && <Meetinglist />}
            {createBooking && <Createbooking />}
        </div>
        </>
    )
}
