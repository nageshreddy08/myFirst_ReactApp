import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//use this command to resolve

const Header = () => {
  const [userInfo, setUserInfo] = useState("Username");
  const [btnName, setbtnName] = useState(["Login"]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const data = await fetch("https://api.github.com/users/nageshreddy08");
    const json = await data?.json();
    console.log(json);
    setUserInfo(json);
  };

  console.log("Header Rendered");
  const { login } = userInfo;

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>User:{login}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            class="login"
            onClick={() =>
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
