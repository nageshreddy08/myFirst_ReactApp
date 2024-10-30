import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu =()=>{
    
const { resId }=useParams();

const resInfo = useRestaurantMenu(resId);

const [showIndex, setShowIndex]= useState(null);


if (resInfo=== null) return <Shimmer />;
const {name, cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
//console.log(resInfo);

const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

//console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
    c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

//console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</h2>
            {
                categories.map((category, index) => (
                    <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} 
                    showItems={index ==showIndex ? true:false}
                    setShowIndex={()=>setShowIndex(index)}
                    />
                ))
            }
        </div>
    )
};
export default RestaurantMenu;

