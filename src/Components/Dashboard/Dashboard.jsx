
import "./dashboard.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "../Calendar/Calendar";
import Meetinglist from "../Meetinglist/Meetinglist";
import Eventcard from "../EventCard/Eventcard";
import Createbooking from "../CreateBooking/Createbooking";


import { useState } from "react";
export default function Dashboard() {
    return(
        <>
        <div id="mainwrapper">
        <div id="leftdiv"> <Sidebar/> </div>
        <div id="rightdiv">        
        <Createbooking />
           </div>
        </div>      
            </>
      
    )
}