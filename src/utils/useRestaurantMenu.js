import { useEffect, useState } from "react";
import {MENU_URL} from "../utils/constants";

//Created custom hook to fetch restaurant data from api and used it in RestaurantMenu.js component-->
const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo]=useState(null);

    useEffect(() => {
        fetchMenu();
    },[]);
    
    const fetchMenu= async ()=>{
        const data = await fetch(MENU_URL+resId);
         const json = await data.json();
         console.log(json);
         setResInfo(json.data);
    };
    return resInfo;

}
export default useRestaurantMenu;