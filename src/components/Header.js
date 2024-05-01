import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
//use this command to resolve 

const Header=()=>{

  const [btnName,setbtnName]=useState(["Login"]);
  console.log("Header Rendered");

    return (
      <div className="header">
        <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          </li>
        <li>Cart</li>
        <button class="login"
        onClick={()=>
        btnName==="Login" ? setbtnName("Logout") : setbtnName("Login")
        }

        >{btnName}</button>

      </ul>
      </div>
  
      </div>
  
    )
  }

  export default Header;