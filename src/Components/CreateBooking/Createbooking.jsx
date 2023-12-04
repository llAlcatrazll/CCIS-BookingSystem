import './createbooking.css';
import * as datedreamer from 'datedreamer';
import logo from '/src/assets/AGSO.png';

const logoElement = <img src={logo} id='user-image-sizing' alt='Logo' />;
const Orgname = 'Administrative and General Services Office';
const officername = 'Philip Anthony Ponce';
const officerposition = 'Sports Undersecretary';

import { useState } from 'react';
import React from 'react';

/*
READ ME!

For data submissions they are to be passed to the host changeable @line 83

current data being submitted are 
(All string)

  eventname
  addressofEvent
  purposeofEvent
  facilityName
  startofEvent
  endofEvent
  status
  
*/

function hourselector() {
    return (
        <React.Fragment>
            <option value=''>Select Hour</option>
            {Array.from({ length: 24 }, (_, index) => {
                const hour = String(index + 1).padStart(2, '0');
                return (
                    <option key={hour} value={hour}>
                        {hour}
                    </option>
                );
            })}
        </React.Fragment>
    );
}
function dayselector() {
    return (
        <React.Fragment>
            <option value=''>Select Day</option>
            {Array.from({ length: 30 }, (_, index) => {
                const hour = String(index + 1).padStart(2, '0');
                return (
                    <option key={hour} value={hour}>
                        {hour}
                    </option>
                );
            })}
        </React.Fragment>
    );
}

export default function Createbooking() {
    const [value, setValue] = useState('');
    const [Facility, setFacility] = useState(false);
    const [Room, setRoom] = useState(false);
    // usestate mean if its currently being used its true and reverts to false when its not
    const [eventname, setEventName] = useState('');
    const [addressofEvent, setAddress] = useState('');
    const [purposeofEvent, setPurpose] = useState('');
    const [facilityName, setFacilityName] = useState('');
    const [endofEvent, setEndofEvent] = useState('');
    const [startofEvent, setStartofEvent] = useState('');

    const [confirmbox, setConfirmbox] = useState(false);

    const handleConfirmBox = () => {
        setConfirmbox(!confirmbox);
    };

    const handleAffiliationChange = (event) => {
        const selectedValue = event.target.value;

        setFacility(selectedValue === 'facility');
        setRoom(selectedValue === 'room');
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        const blog = {
            eventname,
            addressofEvent,
            purposeofEvent,
            facilityName,
            startofEvent,
            endofEvent,
            status: 'pending',
        };

        console.log(blog);
        //   await fetch("http://10.6.9.56:3000/sample-post",
        //   {method: 'POST',
        //  headers: { "Content-Type": "application/json"},
        //     body: JSON.stringify(blog)
        //   }).then((res) => {
        //     console.log('new blog added');
        //     console.log(res);
        //   })
    };

    return (
        <>
            <div id='fullsizeform'>
                <div id='center-wrapper'>
                    <form id='inside-division' onSubmit={handlesubmit}>
                        <input
                            required
                            value={eventname}
                            onChange={(e) => setEventName(e.target.value)}
                            type='text'
                            placeholder='Name of Event'
                        />
                        <input
                            required
                            value={addressofEvent}
                            onChange={(e) => setAddress(e.target.value)}
                            type='text'
                            placeholder='Address and Tel. No. (if any)'
                        />
                        <input
                            required
                            value={purposeofEvent}
                            onChange={(e) => setPurpose(e.target.value)}
                            type='text'
                            placeholder='Purpose of Request'
                        />
                        <div id='smallerbox-date'>
                            <div className='date-facility'>
                                <div className='date-select-header'>
                                    Select Starting Time
                                </div>
                                <input
                                    type='datetime-local'
                                    id='meeting-time'
                                    name='meeting-time'
                                    // value="2023-11-24T19:30"
                                    value={startofEvent}
                                    required
                                    onChange={(e) =>
                                        setStartofEvent(e.target.value)
                                    }
                                />
                            </div>

                            <div className='date-facility'>
                                <div className='date-select-header'>
                                    Select Ending Time
                                </div>
                                <input
                                    type='datetime-local'
                                    id='meeting-time'
                                    name='meeting-time'
                                    // value="2023-11-24T19:30"
                                    value={endofEvent}
                                    required
                                    onChange={(e) =>
                                        setEndofEvent(e.target.value)
                                    }
                                />
                            </div>

                            {/*  Select type - Select Facility */}
                            <div className='type-facility'>
                                <select
                                    name='Venue-Check'
                                    required
                                    id='value'
                                    // onChange={handleAffiliationChange}
                                    onChange={handleAffiliationChange}
                                >
                                    <option value=''>Select a Type</option>
                                    <option value='facility'>Facility</option>
                                    <option value='room'>Room</option>
                                </select>
                                <br />
                                <select
                                    name='Room-facility-check'
                                    required
                                    id='value'
                                    onChange={(e) =>
                                        setFacilityName(e.target.value)
                                    }
                                >
                                    <option value=''>Select a Facility</option>
                                    {Facility && (
                                        <>
                                            <option value='gymnasium'>
                                                Gymnasium
                                            </option>
                                            <option value='hehall'>
                                                HE Hall
                                            </option>
                                            <option value='coindregrounds'>
                                                Coindre Grounds
                                            </option>
                                            <option value='opencouty'>
                                                Open Court
                                            </option>
                                            <option value='ledouxhall'>
                                                Ledoux Hall
                                            </option>
                                            <option value='bouleyroom'>
                                                Bouley Room
                                            </option>
                                            <option value='piazza'>
                                                Piazza
                                            </option>
                                        </>
                                    )}

                                    {Room && (
                                        <>
                                            <option value='m116'>M116</option>
                                            <option value='m118'>M118</option>
                                            <option value='m120'>M120</option>
                                            <option value='m103'>R103</option>
                                        </>
                                    )}
                                </select>
                            </div>
                        </div>
                        <button onClick={handleConfirmBox}>Confirm</button>
                        {confirmbox && (
                            <div id='confirmation-box'>
                                <div id='background-blurbox'></div>
                                <div id='box-forconfirmation'>
                                    <h3>Confirm your Booking Details</h3>
                                    <div className='event-detailsformatter'>
                                        <p className='label'>Event Name: </p>
                                        <p>{eventname}</p>
                                    </div>
                                    <div className='event-detailsformatter'>
                                        <p>Event Address: </p>
                                        {addressofEvent}
                                    </div>
                                    <div className='event-detailsformatter'>
                                        <p>Purpose of Event:</p>
                                        {purposeofEvent}
                                    </div>
                                    <div className='event-detailsformatter'>
                                        <p>Facility Name:</p>
                                        {facilityName}
                                    </div>
                                    <div className='event-detailsformatter'>
                                        <p>Start of Event:</p>
                                        {startofEvent}
                                    </div>
                                    <div className='event-detailsformatter'>
                                        <p>End of Event:</p>
                                        {endofEvent}
                                    </div>
                                    <button
                                        onClick={handleConfirmBox}
                                        id='right-space'
                                    >
                                        Cancle
                                    </button>
                                    <button onChange={handlesubmit}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>

                    {/*  */}
                    <div>
                        <div id='inside-division-right'>
                            <div id='user-container'>{logoElement}</div>
                            <div id='orgname'>{Orgname}</div>
                            <div id='spacer'></div>
                            <div id='officerdetails'>{officername}</div>
                            <div id='officerdetails-position'>
                                {officerposition}
                            </div>
                        </div>
                        <div id='wewqeq'>
                            <div id='officer-info'>
                                <ul>
                                    <li>
                                        <input
                                            type='checkbox'
                                            name=''
                                            id='thecheckbox'
                                        />
                                        <p id='personel-list'>
                                            In-Charged on Security Matters
                                        </p>
                                    </li>

                                    <li>
                                        <input type='checkbox' name='' id='' />
                                        <p id='personel-list'>
                                            Director of Students & Personal
                                            Services
                                        </p>
                                    </li>

                                    <li>
                                        <input type='checkbox' name='' id='' />
                                        <p id='personel-list'>
                                            Moderator / Div. Chairman / Office
                                            Head
                                        </p>
                                    </li>

                                    <li>
                                        <input type='checkbox' name='' id='' />
                                        <p id='personel-list'>
                                            Property Custodian
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id='bottom-info'></div>
                    </div>
                </div>
            </div>
        </>
    );
}
