import dayjs from 'dayjs';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BASE_URL, ERRORMESSAGE } from '../core/constants';
import { uiActions } from '../store/ui-slice';

const setItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    throw new Error(error);
  }
};

export const useProducts = () => {
  const showLocalProducts = useSelector((state) => state.ui.haveLocalProducts);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('loading');
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useDispatch();

  const fetchProducts = useCallback(async () => {
    setIsFetching(true);
    const res = await fetch(`${BASE_URL}/product`);
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
    setItem('products', JSON.stringify(data));
    setItem('productsDate', dayjs());
    dispatch(uiActions.setProductListIsLocal());
  }, [dispatch]);

  useEffect(() => {
    if (showLocalProducts) {
      const timeExpired = CheckTimeExpired();
      if (timeExpired) {
        dispatch(uiActions.setNoLocalProductList());
        fetchProducts();
      } else {
        setStatus('success');
        const localItems =
          localStorage.getItem('products') || JSON.stringify({});
        setData(JSON.parse(localItems));
        setError(null);
        setIsFetching(false);
      }
    } else {
      fetchProducts();
    }
  }, [dispatch, fetchProducts, showLocalProducts, status]);
  return { status, data, error, isFetching };
};

export const CheckTimeExpired = () => {
  let dateIsExpired = true;
  const localItems = localStorage.getItem('products') || JSON.stringify({});
  let localData = JSON.parse(localItems);
  const lastFetchProductsDate = localStorage.getItem('productsDate') || null;
  const now = dayjs();
  const expiryTime = dayjs(lastFetchProductsDate).add('1', 'hour');
  dateIsExpired = now.isAfter(expiryTime);

  if (
    Object.entries(localData).length === 0 ||
    !('products' in localStorage) ||
    !('productsDate' in localStorage) ||
    dateIsExpired
  ) {
    return true;
  }
  return false;
};
