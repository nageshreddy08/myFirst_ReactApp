import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    //console.log(props);
    const { resData } = props;
    const{name, costForTwo, avgRating, deliveryTime, cloudinaryImageId}=resData;
    return(
      //we can write css like below as well, directly applying css to className
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        />
      <h3>{name}</h3>
      <h4>{costForTwo} Rupees for TWO </h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;