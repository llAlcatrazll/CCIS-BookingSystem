import "./calendar.css"
import moment from "moment/moment"
import createCalendar from "../../Calendar-localizer"
import '/Users/alexi/CCIS-BookingSystem/src/index.css';

const events = [
    {
        start: moment("2023-11-21T10:00:00").toDate(),
        end: moment("2023-11-23T10:00:00").toDate(),
        title: "MRI Registration",
    },
];



export default function Calendar(){
    const myEventsList = [
        // Your event data goes here
        {
            start: moment("2023-11-26T10:00:00").toDate(),
            end: moment("2023-11-26T12:00:00").toDate(),
            title: "adsadadadasd",
        },
        {
            start: moment("2023-11-26T14:00:00").toDate(),
            end: moment("2023-11-26T16:00:00").toDate(),
            title: "asdsd",
        },
        {
            start: moment("2023-11-26T18:00:00").toDate(),
            end: moment("2023-11-26T20:00:00").toDate(),
            title: "asdsd",
        }
      ];
    
      const MyCalendar = createCalendar(myEventsList);
    return( 
        <>
        <div id="fullsizecalendar">
            <div id="spacer-calendar">
                <div id="calender-navigation">
                    <div className="section-sidenav">adsdsd</div>
                    <div className="section-sidenav">gdasdasdsad</div>
                    <div className="section-sidenav">asdsadsadsad</div>
                </div>
                <div className="temporary">
                    <div id="tempcalendar">
                    {/* <MyCalendar /> */}
                        <MyCalendar  />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}