
import "./dashboard.css";
import { Link } from "react-router-dom";
import Navigation from "../Topnav/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "../Calendar/Calendar";
import Meetinglist from "../Meetinglist/Meetinglist";
import Eventcard from "../EventCard/Eventcard";
import Createbooking from "../CreateBooking/Createbooking";


export default function Dashboard() {
    return(
        <>
        <div id="mainwrapper">
        
  
        <div id="leftdiv"> <Sidebar/> </div>

        <div id="rightdiv"> 
         {/*
         this is for the eventcard schedules

         <Meetinglist>     
         </Meetinglist>   */}
         
         <Createbooking />
           </div>
        </div>
    
    
        {/* <div>
        </div>
       
         */}
        {/* <div id="mothercomponent"> */}
{/* center component */}
            
            {/* <div id="thediv">
            
            adfdf
            </div> */}
            
        
            </>
      
    )
}