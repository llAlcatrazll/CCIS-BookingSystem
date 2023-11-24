
import "./login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login(){
//     useEffect(async() =>
//     {
//        const { data } = await fetch("10.6.9.11:3002/sample")
//        console.log(data);
//     }
//     )
    return(
        <>
        <div id="background">
        <div className="loginbox">
       
            
       {/* log in logo */}
                   <img id="loginimage" src="/src/assets/logo.png" alt="cannot render" />
       
       {/* email input */}
                   <input className="inputfield" type="email" placeholder="Email"/>
       
       {/* password input */}
                   <input className="inputfield" type="password" placeholder="Password"  />
       
       {/* log in button */}
                   <Link className="display-blocked" 
                   to={'/Sidebar'}> 
                    <button id="buttonwidth">Log In</button>
                   </Link>
       
       {/* forgotpassword */}
                   <Link className="display-blocked" id="fontlarge" 
                   to={'/Forgotpass'}
                   >Forgot Password?</Link>
               </div>
        </div>
        </>
    )
}