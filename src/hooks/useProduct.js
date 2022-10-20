import { useQuery } from 'react-query';
import { BASE_URL, ERRORMESSAGE } from '../core/constants';

export const useProduct = ({ id }) => {
  const fetchProduct = async () => {
    const res = await fetch(`${BASE_URL}/product/${id}`);
    if (!res.ok) {
      throw new Error(ERRORMESSAGE.fetchDataError);
    }
    const data = await res.json();
    return data;
  };

  const { status, data, error, isFetching } = useQuery('product', fetchProduct);

  return { status, data, error, isFetching };
};
