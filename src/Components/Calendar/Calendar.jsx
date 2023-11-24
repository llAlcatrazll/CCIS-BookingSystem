import "./calendar.css"
import moment from "moment/moment"
import createCalendar from "../../Calendar-localizer"

const events = [
    {
        start: moment("2023-11-21T10:00:00").toDate(),
        end: moment("2023-11-23T10:00:00").toDate(),
        title: "MRI Registration",
    },
];



export default function Calendar() {
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

                        <createCalendar events={events} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}