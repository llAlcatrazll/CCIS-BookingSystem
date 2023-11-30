import { Link } from 'react-router-dom';
import './navigation.css';
import React from 'react';
import { Calendar, globalizeLocalizer } from 'react-big-calendar';
import globalize from 'globalize';
import MyCalendar from '../../Calendar-localizer';
import createCalendar from '../../Calendar-localizer';
import '/Users/alexi/CCIS-BookingSystem/src/index.css';

export default function Navigation() {
    const myEventsList = [
        // Your event data goes here
    ];

    const MyCalendar = createCalendar(myEventsList);
    return (
        <>
            <div id='fullsizecalendar'>
                {/* <img src="./src/assets/calendar.png" id="tempimage" alt="" srcset="" /> */}
                <MyCalendar />
            </div>
        </>
    );
}
