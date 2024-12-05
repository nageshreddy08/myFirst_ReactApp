import { useState, useEffect } from "react";

//custom hook to fetch data from api
const useFetchApi = (url) => {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    fetchApiResponse();
  }, []);

  const fetchApiResponse = async () => {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    setApiResponse(data);
  };
  return apiResponse;
};

export default useFetchApi;
