import { useRouteError } from "react-router-dom";

//useReactError is a hook which is provided by "react-router-dom". It gives us exact error details about the errors. 
const ErrorPage=()=>{

const err=useRouteError();
console.log(err)
    return(
<div>
        <h2>Oops....requested page not found!!</h2>

        <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}
export default ErrorPage;