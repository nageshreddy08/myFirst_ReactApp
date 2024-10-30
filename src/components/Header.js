import { LOGO_URL } from "../utils/constants.js";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext.js";
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
    setUserInfo(json);
  };

  //console.log("Header Rendered");
  const { login } = userInfo;

const data=useContext(UserContext);
console.log(data);

  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-48" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-2 m-2">
          <li className="p-4">User:{login}</li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4">Cart</li>
          <button
            class="login"
            onClick={() =>
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
            }
          >
            {btnName}
          </button>
          <li className="p-4 font-bold">{data.loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
