import RestaurantCard from "./RestaurantCard";
//import resList from "../utils.js/restaurantData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body = () => {
  const [listOfRestaurants, setListOfrestaurants] = useState([]);

  const [searchedRestaurant, setSearchedRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  

  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //console.log(json);

    // const restData=json.data.map(item=>item.card.card.info)
    //    setListOfrestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setListOfrestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchedRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
        <input
          type="text"
          data-testid="searchInput"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="px-3 py-3 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            //console.log(searchText);
            const searchedRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearchedRestaurants(searchedRestaurant);
          }}
        >
          Search
        </button>

        <button
          className="px-4 py-2 bg-orange-200 rounded-lg"
          onClick={() => {
            filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfrestaurants(filteredRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>

      <div className="flex flex-wrap p-1 m-1">
        {searchedRestaurant.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"/restaurants/" + restaurants.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurants?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
