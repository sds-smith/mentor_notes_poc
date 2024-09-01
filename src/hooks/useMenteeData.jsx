import { useState, useCallback, useEffect } from "react";
import getUsers from "../utils/swapi";

export function useMenteeData() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
  
    const get = useCallback(async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        setData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    },[]);
  
    useEffect(() => {
      if (!data && !loading && !error) {
        get()
      }
    }, [data, loading, error, get])
  
    return { loading, error, data };
  }
  