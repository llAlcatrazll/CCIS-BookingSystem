import "./meetinglist.css";
import Eventcard from "../EventCard/Eventcard";



const result = 
'[{"eventname":"Christmas Party","addressofEvent":"Gymnasium","purposeofEvent":"Get to know event","facilityName":"bouleyroom","startofEvent":"2023-11-24T16:00","endofEvent":"2023-11-24T20:30","status":"pending"},{"eventname":"Holocaust","addressofEvent":"Gymnasium","purposeofEvent":"Get to know event","facilityName":"bouleyroom","startofEvent":"2023-11-24T16:00","endofEvent":"2023-11-24T20:30","status":"denied"},{"eventname":"Christmas Party","addressofEvent":"Gymnasium CJC","purposeofEvent":"party","facilityName":"bouleyroom","startofEvent":"2023-11-03T16:43","endofEvent":"2023-11-30T16:43","status":"approved"}]';
const datas = JSON.parse(result);
// console.log(datas);

 export default function Meetinglist(){

  
  
    return(
        <>
        <div id="fullsizeform">
          {/* <div id="topeventlistbox-nav">

          </div> */}
          <div id="eventlistbox"> 
            {/* <p>{data[0].eventname}</p> */}  
          {datas.map(data => (
            <Eventcard  data ={data} />
          )   )}

          </div>
        </div>
        </>
    )
}