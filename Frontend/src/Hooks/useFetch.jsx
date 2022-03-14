import { useState, useEffect } from "react";
import axios from "axios";

export const sendData = async (url, data) => {
  const response = await fetch(`http://localhost:4000/api/${url}/store`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  });
  return response.json(); 
};

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return { data, error, loading, refetch };
};
