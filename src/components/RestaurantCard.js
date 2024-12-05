import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext"


const RestaurantCard=(props)=>{
    //console.log(props);
    const { resData } = props;
   // console.log(resData);
    const{name, costForTwo, avgRating, sla, cloudinaryImageId}=resData;
    const data=useContext(UserContext);//Accessing the data from useContext without props drilling
    //console.log(data);
    
    return(
      //we can write css like below as well, directly applying css to className
      <div data-testid="resCard" className="m-2 p-2 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-300" >
        <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4 className="text-base py-2">{costForTwo} Rupees for TWO </h4>
      <h4>{sla?.slaString}</h4>
      <h5>{data.companyName}</h5>
      
      
      </div>
    );
  };

  export default RestaurantCard;