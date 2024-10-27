import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu =()=>{

const { resId }=useParams();

const resInfo = useRestaurantMenu(resId);

if (resInfo=== null) return <Shimmer />;
const {name, cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
//console.log(resInfo);

const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

console.log(itemCards);

    return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(",")} - {costForTwoMessage}</h2>
            <h3>Menu</h3>
            <ul>
                {itemCards?.map((item) => (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {"Rs."}{item?.card?.info?.price / 100}</li>
                ))}
            </ul>
        </div>
    )
};

export default RestaurantMenu;

