import './calendar.css';
import moment from 'moment/moment';
import createCalendar from '../../Calendar-localizer';
import '/Users/alexi/CCIS-BookingSystem/src/index.css';

const events = [
    {
        start: moment('2023-11-21T10:00:00').toDate(),
        end: moment('2023-11-23T10:00:00').toDate(),
        title: 'MRI Registration',
    },
];

/*
READ ME!
   Calendar has many sidebar features such as selective filtering


*/

export default function Calendar() {
    const myEventsList = [
        // Your event data goes here
        {
            start: moment('2023-11-26T10:30:00').toDate(),
            end: moment('2023-11-26T12:00:00').toDate(),
            title: 'LIRC Tournament',
        },
        {
            start: moment('2023-11-26T14:00:00').toDate(),
            end: moment('2023-11-26T16:00:00').toDate(),
            title: 'Esports Games',
        },
        {
            start: moment('2023-11-23T18:00:00').toDate(),
            end: moment('2023-11-24T20:00:00').toDate(),
            title: 'JPIA conference',
        },
        {
            start: moment('2023-11-05T18:00:00').toDate(),
            end: moment('2023-11-05T20:00:00').toDate(),
            title: 'Reach out Activity',
        },
        {
            start: moment('2023-11-15T18:00:00').toDate(),
            end: moment('2023-11-16T20:00:00').toDate(),
            title: 'Book Week',
        },
        {
            start: moment('2023-11-28T18:00:00').toDate(),
            end: moment('2023-11-28T18:00:00').toDate(),
            title: 'IT Week',
        },
        {
            start: moment('2023-11-30T18:00:00').toDate(),
            end: moment('2023-11-30T18:00:00').toDate(),
            title: 'Payment Deadline',
        },
    ];

    const MyCalendar = createCalendar(myEventsList);
    return (
        <>
            <div id='fullsizecalendar'>
                <div id='spacer-calendar'>
                    <div id='calender-navigation'>
                        <div className='section-sidenav'>Sample UI 1</div>
                        <div className='section-sidenav'> Sample UI 2</div>
                        <div className='section-sidenav'>Sample UI 3</div>
                    </div>
                    <div className='temporary'>
                        <div id='tempcalendar'>
                            {/* <MyCalendar /> */}
                            <MyCalendar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
