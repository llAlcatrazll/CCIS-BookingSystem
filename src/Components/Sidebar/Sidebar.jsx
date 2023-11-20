import { Link, Navigate, useNavigate } from "react-router-dom";
import "./sidebar.css"
import Calendar from "../Calendar/Calendar";
import Meetinglist from "../Meetinglist/Meetinglist";
import { useState } from "react";

// const [eventcalendar, seteventcalendar] = useState(false);
// const [themeetings, setthemeetings] = useState(false);

// const handledivchange = (event) => {
//     const selectedValue = event.target.value;
//     seteventcalendar(selectedValue === 'calendar');
//     setthemeetings(selectedValue === 'meetings');
// }
    

export default function Sidebar() {
    return(
        <>
        <span id="test" >
            <div id="sidebarbox">
            <img id="loginimage" src="/src/assets/logo.png" alt="cannot render" />
                <ul>
                    {/*  onChange={handledivchange} */}
                    {/* <li onClick={value="calendar"}>Activity Calendar</li> */}
                    <li >Activity Calendar</li>
                    <li >Booking History</li>
                    <li >Booking Management</li>
                    <li >Create Booking</li>
                 
                </ul>
                <div id="spacer"></div>
                <Link to={'/'} ><button>Log Out</button></Link>
           
                    {/* '/' is the log in page */}
            </div>
        </span>
        </>
    )
}