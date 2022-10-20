import dayjs from 'dayjs';

import { useProduct } from './useProduct';

export const useLocalProduct = ({ id }) => {
  console.log(
    '🚀 ~ file: useLocalProduct.js ~ line 6 ~ useLocalProduct ~ id',
    id
  );
  const localData = JSON.parse(localStorage.getItem(`productid_${id}`)) || null;

  const lastFetchProductsDate =
    localStorage.getItem(`productDate_${id}`) || null;
  let dateExpired = true;
  if (!!lastFetchProductsDate) {
    const now = dayjs();
    const expiryTime = dayjs(lastFetchProductsDate).add('1', 'hour');
    dateExpired = now.isAfter(expiryTime);
  }

  if (localData === null || lastFetchProductsDate === null || dateExpired) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { status, data, error, isFetching } = useProduct({ id });
    localStorage.setItem(`productid_${id}`, JSON.stringify(data));
    localStorage.setItem(`productDate_${id}`, dayjs());

    return { status, data, error, isFetching };
  }

  const status = 'success';
  const data = localData;
  const error = null;
  const isFetching = false;

  return { status, data, error, isFetching };
};
