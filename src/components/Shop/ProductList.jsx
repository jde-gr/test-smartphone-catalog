import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem';
import { BASE_URL } from '../../core/constants';
import { InputDiv, Input, PLPList } from './styles/ProductList.styles';

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

  const filterHandler = (event) => {
    setFilteredData(
      data.filter((device) => {
        const value = event.target.value;
        return (
          device.brand.toLowerCase().includes(value) ||
          device.model.toLowerCase().includes(value)
        );
      })
    );
  };

  return (
    <>
      <InputDiv>
        <Input type='text' placeholder='Buscar' onChange={filterHandler} />
      </InputDiv>
      {status === 'error' && <p>{error.toString()}</p>}
      {(status === 'loading' || isFetching) && <p>Fetching data...</p>}
      {status === 'success' && filteredData !== [] && (
        <PLPList>{devices}</PLPList>
      )}
    </>
  );
};

ProductList.propTypes = {};

export default ProductList;
