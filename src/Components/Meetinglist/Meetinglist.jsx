import "./meetinglist.css";
import Eventcard from "../EventCard/Eventcard";
import datas from '/data.json';

 export default function Meetinglist(){
  
    return(
        <>
        <div id="fullsizeform">
          <div id="eventlistbox"> 
          {datas.map(data => (
            <Eventcard  data ={data} />
          )   )}

          </div>
        </div>
        </>
    )
}