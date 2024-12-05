import { createContext } from "react"


//create context using createContext and export the function
const UserContext= createContext({
    companyName:"Food Coma",
    loggedinUser:"Nagesh",
});

export default UserContext;