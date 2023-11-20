import "./meetinglist.css";
import Eventcard from "../EventCard/Eventcard";
export default function Meetinglist(){
    return(
        <>
        <div id="mainbox">
          <div id="topeventlistbox-nav">

          </div>
          <div id="eventlistbox"> 
            
          <Eventcard />
          <Eventcard />
          <Eventcard />
          
          </div>
        </div>
        </>
    )
}