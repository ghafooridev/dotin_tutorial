import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholderss.typicode.com";

function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/${url}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setError(false);
        console.log(json);
      })
      .catch((e) => {
        setError(true);
        setData(null);
        console.log(e);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
