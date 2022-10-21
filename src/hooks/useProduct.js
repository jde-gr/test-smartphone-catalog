import { useCallback, useEffect, useState } from 'react';
import { BASE_URL, ERRORMESSAGE } from '../core/constants';
import { CheckTimeExpired } from './useProducts';

const setItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    throw new Error(error);
  }
};

export const useProduct = ({ id }) => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('loading');
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const fetchProduct = useCallback(async () => {
    setIsFetching(true);
    const res = await fetch(`${BASE_URL}/product/${id}`);
    if (!res.ok) {
      setIsFetching(false);
      setStatus('error');
      setError(Error(ERRORMESSAGE.fetchDataError));
      throw new Error(ERRORMESSAGE.fetchDataError);
    }
    const data = await res.json();
    setIsFetching(false);
    setStatus('success');
    setData(data);
    setItem(id, JSON.stringify(data));
  }, [id]);

  useEffect(() => {
    const showLocalProduct = () => {
      try {
        const item = JSON.parse(localStorage.getItem(id));
        if ('imgUrl' in item) {
          return true;
        }
        return false;
      } catch (error) {
        return false;
      }
    };

    const getLocalProduct = showLocalProduct();

    if (getLocalProduct) {
      const timeExpired = CheckTimeExpired();
      if (timeExpired) {
        fetchProduct();
      } else {
        setStatus('success');
        const localItem = localStorage.getItem(id) || JSON.stringify({});
        setData(JSON.parse(localItem));
        setError(null);
        setIsFetching(false);
      }
    } else {
      fetchProduct();
    }
  }, [id, status, fetchProduct]);

  return { status, data, error, isFetching };
};
