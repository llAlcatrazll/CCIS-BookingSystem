import "./calendar.css"


export default function Calendar() {
    return(
        <>
        <div id="fullsizecalendar">
            <div id="spacer-calendar">
                <div id="calender-navigation">
                    <div className="section-sidenav"></div>
                    <div className="section-sidenav"></div>
                    <div className="section-sidenav"></div>
                </div>
                <div className="temporary">
                    <div id="tempcalendar">temp calendar</div>
                </div>
            </div>
        </div>
        </>
    )
}