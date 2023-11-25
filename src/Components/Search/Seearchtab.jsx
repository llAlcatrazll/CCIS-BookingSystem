import './search.css';
const todaydate = 'Date Today';
const todaydate_value = 'November 25, 2023'
import { useState } from 'react';
import React from 'react';




export default function Searchtab(){
    
  
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

    const handleAffiliationChange = (event) => {
      const selectedValue = event.target.value;
  
      setFacility(selectedValue === 'facility');
      setRoom(selectedValue === 'room');

    };

    const handlesubmit = async(e) =>{
      e.preventDefault();
      const blog = { facilityName, startofEvent, endofEvent, status:'pending'};

      console.log(blog)

    };

    return(
        <>
        <div id="fullsizeform">
          <div id="center-wrapper">
            <form id="searchselectors" onSubmit={handlesubmit}>
  
              <div id="row-adf">     
                <div className="date-facility">
                  <div className="date-select-header">Select Starting Time</div>
                  <input
                    type="datetime-local"
                    id="meeting-time" 
                    name="meeting-time"
                    // value="2023-11-24T19:30"
                    value={startofEvent}
                    required
                    onChange={(e) => setStartofEvent(e.target.value)}
                     />
                </div>
                
                <div className="date-facility">
                <div className="date-select-header">Select Ending Time</div>
                  <input
                    type="datetime-local"
                    id="meeting-time" 
                    name="meeting-time"
                    // value="2023-11-24T19:30"
                    value={endofEvent}
                    required
                    onChange={(e) => setEndofEvent(e.target.value)}
                     />
                </div>






{/*  Select type - Select Facility */}
                
              </div>
              <div id='row-adf2'>
              <div className="type-facility">
                  
                  <select
                    name="Venue-Check"
                    required
                    id="value"
                    // onChange={handleAffiliationChange}
                    onChange={handleAffiliationChange}
  
                  >
                    <option value="">Select a Type</option>
                    <option value="facility">Facility</option>
                    <option value="room">Room</option>
                  </select>
                  <br />
                  <select
                    name="Room-facility-check"
                    required
                    id="value"
                    onChange={(e) => setFacilityName(e.target.value)}>
  
                    <option value=""
                    >Select a Facility</option>
                    {Facility && (
                      <>
                        <option value="any">Any</option>
                        <option value="gymnasium">Gymnasium</option>
                        <option value="hehall">HE Hall</option>
                        <option value="coindregrounds">Coindre Grounds</option>
                        <option value="opencourt">Open Court</option>
                        <option value="ledouxhall">Ledoux Hall</option>
                        <option value="bouleyroom">Bouley Room</option>
                        <option value="piazza">Piazza</option>
                      </>
                    )}
    
                    {Room && (
                      <>
                        <option value="any">any</option>
                        <option value="m116">M116</option>
                        <option value="m118">M118</option>
                        <option value="m120">M120</option>
                        <option value="m103">R103</option>
                      </>
                    )}
  
                  </select>
  
                  </div>
  
              </div>
           
              <button>Search</button>
            </form>
            
        </div>
        
        </div>
        </>
    )
}


