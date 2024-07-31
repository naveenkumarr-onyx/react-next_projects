import React, { useEffect, useState } from "react";

const useFetch = ({ url, option = {} }: any) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchApi = await fetch(url, { ...option });
      if (!fetchApi.ok) throw new Error(fetchApi.statusText);
      const response = await fetchApi.json();
      if (response) {
        setData(response);
        setLoading(false);
        setError(null);
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
