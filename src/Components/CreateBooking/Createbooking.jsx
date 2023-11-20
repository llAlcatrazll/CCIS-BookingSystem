import "./createbooking.css";
import * as datedreamer from "datedreamer";
import logo from '/src/assets/AGSO.png';
const logoElement = <img src={logo} id='user-image-sizing' alt="Logo" />;
const Orgname = 'Administrative and General Services Office';
const officername = 'Philip Anthony Ponce';
const officerposition = 'Sports Undersecretary';

export default function Createbooking() {
    return(
        <>
        
        <div id="fullsizeform">
        <div id="center-wrapper">
            <div id="inside-division">
                <input type="text" placeholder="Name of Event" />

                <input type="text" placeholder="Address and Tel. No. (if any)"/>

                <input type="text" placeholder="Purpose of Request" />

                <div id="smallerbox-date">
                <select name="Venue-Chechk" id="">
                <option value="">Select a Type</option>
                <option value="facility">Facility</option>
                <option value="room">room</option>

            </select>
            <br />  
            <select name="Room-facility-check" id="">
                <option value="">Select a Venue</option>
                <option value="gymnasium">Gymnasiym</option>
                <option value="hehall">HE Hall</option>
                <option value="coindregrounds">Coindre Grounds</option>
                <option value="opencouty">Open Court</option>
                <option value="ledouxhall">Ledoux Hall</option>
                <option value="bouleyroom">Bouley Room</option>
                <option value="piazza">Piazza</option>

            </select>
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
            </div>
        </div>
        {/* <div is="rightdiv">asdadas</div> */}
        </div>
        </>
    )
}