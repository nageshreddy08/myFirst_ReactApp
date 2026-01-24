import { LOGO_URL } from "../utils/constants.js";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
import useFetchApi from "../utils/useFetchApi.js";
//use this command to resolve
const Header = () => {
 // const [userInfo, setUserInfo] = useState("Username");
  const [btnName, setbtnName] = useState("Login");
  const apiResponse=useFetchApi("https://api.github.com/users/nageshreddy08");
  console.log("Api Response from custom hook:")
  console.log(apiResponse);

  // useEffect(() => {
  //   getUserData();
  // }, []);

  const handleLogin=()=>{
    if(btnName=="Login"){
      setbtnName("Logout");
      console.log("insid if",btnName)
    }
    else{
      setbtnName("Login");
      console.log("insid else",btnName)
    }
  };

  // const getUserData = async () => {
  //   const data = await fetch("https://api.github.com/users/nageshreddy08");
  //   const json = await data?.json();
  //   setUserInfo(json);
  // };

  //console.log("Header Rendered");
  //const { login } = userInfo;

const data=useContext(UserContext);//Accessing the data from useContext without props drilling

//Subscribing to Store
const cartItems = useSelector((store)=> {
 return store.cart.items});
//for client side routing use <Link></Link>,it will not make network call and donot refresh the page
  return (
    <div className="flex justify-between shadow-lg bg-white sm:bg-orange-500 md:bg-lime-100 opacity-80">
      <div className="logo-container md:w-32 lg:w-48">
        <img className="w-16 md:w-32 lg:w-48" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-2 m-2">
       
         <li className="p-4" testid="User">User:{apiResponse?.name}</li> 
        
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
          <li className="p-4 font-bold">
           <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>
          <button
            className="login p-4 border-black font-bold"
            onClick={handleLogin}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
