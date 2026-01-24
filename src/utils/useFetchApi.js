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

//Another way
// import { useState, useEffect } from "react";

// function useFetch(url) {
//   const [data, setData] = useState(null);     // For storing fetched data
//   const [loading, setLoading] = useState(true); // For loading state
//   const [error, setError] = useState(null);     // For error message

//   useEffect(() => {
//     let isMounted = true; // To avoid setting state on unmounted component

//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(url);

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         if (isMounted) {
//           setData(result);
//           setError(null);
//         }
//       } catch (err) {
//         if (isMounted) {
//           setError(err.message || "Something went wrong");
//           setData(null);
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchData();

//     return () => {
//       isMounted = false; // Cleanup function to avoid memory leak
//     };
//   }, [url]);

//   return { data, loading, error };
// }

// export default useFetch;
