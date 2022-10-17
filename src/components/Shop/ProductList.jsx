import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import {
  BASE_URL,
  ERRORMESSAGE,
  FETCHNOTIFICATIONMSG,
  FETCHNOTIFICATIONTITLE,
  NOTIFICATIONSTATUS,
} from '../../core/constants';
import { uiActions } from '../../store/ui-slice';
import LoadingSpinner from '../UI/LoadingSpinner';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
import {
  PLPList,
  PageContainer,
  LoadingWrapper,
} from './styles/ProductList.styles';

const ProductList = () => {
  const fetchProducts = async () => {
    const res = await fetch(`${BASE_URL}/product`);
    if (!res.ok) {
      throw new Error(ERRORMESSAGE.fetchDataError);
    }
    const data = await res.json();
    return data;
  };

  // const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useQuery(
    'products',
    fetchProducts
  );

  const [filteredData, setFilteredData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    status === 'error' &&
      dispatch(
        uiActions.showNotification({
          status: NOTIFICATIONSTATUS.error,
          title: FETCHNOTIFICATIONTITLE.error,
          message: `${FETCHNOTIFICATIONMSG.error}: ${error.toString()}`,
        })
      );
    status === 'success' && !filteredData.length && setFilteredData(data);
  }, [status, data, filteredData, error, dispatch]);

  const devices = filteredData?.map((device) => (
    <ProductItem
      key={device.id}
      id={device.id}
      brand={device.brand}
      model={device.model}
      price={device.price}
      imgUrl={device.imgUrl}
    />
  ));

  const filterHandler = (value) => {
    setFilteredData(
      data.filter((device) => {
        return (
          device.brand.toLowerCase().includes(value) ||
          device.model.toLowerCase().includes(value)
        );
      })
    );
  };

  return (
    <PageContainer>
      <SearchBar onChangeFilter={filterHandler} />
      {(status === 'loading' || isFetching) && (
        <LoadingWrapper>
          <LoadingSpinner />
        </LoadingWrapper>
      )}
      {status === 'success' && !!filteredData.length && (
        <PLPList>{devices}</PLPList>
      )}
    </PageContainer>
  );
};

export default ProductList;
