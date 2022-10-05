import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import { BASE_URL } from '../../core/constants';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
import { PLPList, PageContainer } from './styles/ProductList.styles';

const ProductList = () => {
  const fetchProducts = async () => {
    const res = await fetch(`${BASE_URL}/product`);
    const data = await res.json();
    return data;
  };

  // const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useQuery(
    'products',
    fetchProducts
  );

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    status === 'success' && !filteredData.length && setFilteredData(data);
  }, [status, data, filteredData]);

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
      {status === 'error' && <p>{error.toString()}</p>}
      {(status === 'loading' || isFetching) && <p>Fetching data...</p>}
      {status === 'success' && filteredData !== [] && (
        <PLPList>{devices}</PLPList>
      )}
    </PageContainer>
  );
};

export default ProductList;
