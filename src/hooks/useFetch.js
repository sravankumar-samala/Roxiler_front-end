import { useCallback, useEffect, useState } from "react";

export function useFetchData(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Something went wrong!");
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, isLoading, error };
}
