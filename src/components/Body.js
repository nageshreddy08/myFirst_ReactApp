import RestaurantCard from "./RestaurantCard";
//import resList from "../utils.js/restaurantData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body=()=>{

const [listOfRestaurants, setListOfrestaurants] = useState([])

const [searchedRestaurant, setSearchedRestaurants]=useState([])
const [searchText, setSearchText]= useState("")

console.log("Body rendered...")
useEffect(()=>{
fetchData()
},[])

const fetchData = async ()=>{
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
);
  
  const json =await data.json();
  
  console.log(json);

  // const restData=json.data.map(item=>item.card.card.info)
//    setListOfrestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
      setListOfrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setSearchedRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}
      
    return listOfRestaurants.length === 0 ? 
  (<Shimmer />) :
    (
      <div className="body">
        <div className="filter">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                
            setSearchText(e.target.value);
          }}
/>
<button

        onClick={()=>{
console.log(searchText)
    const searchedRestaurant=listOfRestaurants.filter(
  (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
 
    );
  setSearchedRestaurants(searchedRestaurant);

 }}

        >Search</button>

        <button className="filter-btn" 
        onClick={()=>{

          filteredRestaurant =listOfRestaurants.filter(
            (res)=>res.info.avgRating > 4.1
          );
          setListOfrestaurants(filteredRestaurant);

        }}>
          
          Top Rated Restaurants</button>

        </div>
        <div className ="res-container"> 
        {searchedRestaurant.map((restaurants) =>(
            <RestaurantCard key={restaurants.info.id} resData={restaurants?.info}/>
            //whenever we are using map or looping on, we should always give key
          ))
        }
  
      </div>
      </div>
    )
  }

  export default Body;