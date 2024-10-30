import { useContext } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    //console.log(props);
    const { resData } = props;
    const{name, costForTwo, avgRating, sla, cloudinaryImageId}=resData;
    
    return(
      //we can write css like below as well, directly applying css to className
      <div className="m-2 p-2 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-300" >
        <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4 className="text-base py-2">{costForTwo} Rupees for TWO </h4>
      <h4>{sla?.slaString}</h4>
      
      </div>
    );
  };

  export default RestaurantCard;