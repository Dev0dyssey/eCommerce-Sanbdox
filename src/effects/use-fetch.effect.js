import React, { useState, useEffect } from "react";

// Example of a custom Rect hook to get data from an API call
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const dataArray = res.json();
      setData(dataArray[0]);
    };

    fetchData();
  });

  return data;
};

export default useFetch;
