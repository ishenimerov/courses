import axios from 'axios';
import { useState, useEffect } from 'react';

import type { Courses } from '../types/courses';

const useGetMany = () => {
  const [data, setData] = useState<Courses | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const api = 'https://logiclike.com/docs/courses.json';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Courses>(api);
        setData(response.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('An unknown error occurred'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api]);

  return { data, loading, error };
};

export default useGetMany;
