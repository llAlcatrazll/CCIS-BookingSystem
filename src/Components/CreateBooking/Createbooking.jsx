import "./createbooking.css";
import * as datedreamer from "datedreamer";
import logo from '/src/assets/AGSO.png';
const logoElement = <img src={logo} id='user-image-sizing' alt="Logo" />;
const Orgname = 'Administrative and General Services Office';
const officername = 'Philip Anthony Ponce';
const officerposition = 'Sports Undersecretary';
import { useState } from "react";
import React from "react";

function hourselector() {
  return (
    <React.Fragment>
      <option value="">Select Hour</option>
      {Array.from({ length: 12 }, (_, index) => {
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
      <option value="">Select Day</option>
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
  
    const handleAffiliationChange = (event) => {
      const selectedValue = event.target.value;
  
      setFacility(selectedValue === 'facility');
      setRoom(selectedValue === 'room');
    };

    return(
        <>
        <div id="fullsizeform">
          <div id="center-wrapper">
            <div id="inside-division">
              <input type="text" placeholder="Name of Event" />
              <input type="text" placeholder="Address and Tel. No. (if any)" />
              <input type="text" placeholder="Purpose of Request" />
  
              <div id="smallerbox-date">

                <div className="type-facility">
                  <select name="Timein" id="">
                    <option value=""> Month</option>
                    <option value="Jan">January</option>
                    <option value="Febuary">Febuary</option>
                    <option value="March">March</option>
                    <option value="April  ">April</option>
                  </select>
                  <select name="Timein" id="">
                    {dayselector()}
                  </select>
                  <select name="Timein" id="">
                    <option value="">Select School Year</option>
                    <option value="2023">2022 - 2023</option>
                    <option value="2024">2023 - 2024</option>
             
                  </select>
                  </div>



                <p>Select Date</p>
                <div className="type-facility">
                <select name="Timein" id="">
                    {hourselector()}
                  </select>
                  <select name="Timein" id="">
                    <option value="">Select Minutes</option>
                    <option value="">00</option>
                    <option value="">30</option>
                  </select>

                  <select name="Timein" id="">
                    <option value="">Select Median</option>
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </div>






{/*  Select type - Select Facility */}
                <div className="type-facility">
                  
                <select
                  name="Venue-Chechk"
                  id=""
                  onChange={handleAffiliationChange}
                >
                  <option value="">Select a Type</option>
                  <option value="facility">Facility</option>
                  <option value="room">Room</option>
                </select>
                <br />
                <select
                  name="Room-facility-check"
                  id="value"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}>

                  <option value="">Select a Facility</option>
                  {Facility && (
                    <>
                      <option value="gymnasium">Gymnasium</option>
                      <option value="hehall">HE Hall</option>
                      <option value="coindregrounds">Coindre Grounds</option>
                      <option value="opencouty">Open Court</option>
                      <option value="ledouxhall">Ledoux Hall</option>
                      <option value="bouleyroom">Bouley Room</option>
                      <option value="piazza">Piazza</option>
                    </>
                  )}
  
                  {Room && (
                    <>
                      <option value="m116">M116</option>
                      <option value="m118">M118</option>
                      <option value="m120">M120</option>
                      <option value="m103">R103</option>
                    </>
                  )}

                </select>

                </div>

              </div>

             <button>Submit</button>
            
            </div>
            {/*  */}
            <div>
            <div id="inside-division-right">
                
                    <div id="user-container">{logoElement}sdsd</div>
                    <div id="orgname">{Orgname}</div>
                    <div id="spacer"></div>
                    <div id="officerdetails">{officername}</div>
                    <div id="officerdetails-position">{officerposition}</div>
                
                
            </div>
            <div id="wewqeq">
                    <div id="officer-info">
                        <ul>
                        <li><input 
                        type="checkbox" 
                        name="" 
                            id="thecheckbox" />
                        <p id="personel-list">In-Charged on Security Matters</p></li>

                        <li>
                        <input
                         type="checkbox" 
                         name="" 
                         id="" />
                        <p id="personel-list">Director of Students & Personal Services</p>
                        </li>

                        <li>
                        <input  
                        type="checkbox" 
                        name="" 
                        id="" />
                        <p id="personel-list">Moderator / Div. Chairman / Office Head</p>
                        </li>

                        <li>
                        <input 
                        type="checkbox" 
                        name="" 
                        id="" />
                        <p id="personel-list">Property Custodian</p>
                        </li>

                        </ul>
                        
                        </div>
            </div>
            <div id="bottom-info" >
              asdsadsad
            </div>
            </div>
        </div>
        </div>
        </>
    )
}