import { Link, Navigate, useNavigate } from "react-router-dom";
import "./sidebar.css"
import Calendar from "../Calendar/Calendar";
import Meetinglist from "../Meetinglist/Meetinglist";
import Createbooking from "../CreateBooking/Createbooking";
import React, { useState, useEffect } from 'react';
import Navigation from "../Navigation/Navigation";

// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
// }

function closeNavbar() {
  var sidebar = document.getElementById("sidebarbox");
  var currentWidth = sidebar.style.width;
  // getting the current width fromt the css sheet
  if (currentWidth === "300px") {
    sidebar.style.width = "100px";
  } else {
    sidebar.style.width = "300px";
  }
}

export default function Sidebar() {

    //  Current Finished Pages
    //      MeetingList ~
    //      Createbooking /

    // working in calendar page
    const [sidenavWidth, setSidenavWidth] = useState("");

    useEffect(() => {
      const sidenav = document.getElementById("sidebarbox");
      
      if (sidenav) {
        const width = window.getComputedStyle(sidenav).width;
        setSidenavWidth(width);
      }
    }, []);
  
    const [activityCalendar, setActivityCalendar] = useState(false);
    const [bookingHistory, setBookingHistory] = useState(false);
    const [bookingManagement, setBookingManagement] = useState(false);
    const [createBooking, setCreateBooking] = useState(true);
    const [sidenav , Hidesidenav] = useState(false);
    

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
                Search Availability
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
            <button onClick={closeNavbar}>Collapse</button>
          </div>
            {activityCalendar && <Calendar />}
            {bookingHistory && <Navigation />}
            {/* replace calendar with a functional component */}
            {bookingManagement && <Meetinglist />}
            {createBooking && <Createbooking />}
        </div>
        </>
    )
  
}
