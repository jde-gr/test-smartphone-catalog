import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem';
import { BASE_URL } from '../../core/constants';
import { PLPList } from './styles/ProductList.styles';

const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/product`);
  const data = await res.json();
  return data;
};

const ProductList = () => {
  // const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useQuery(
    'products',
    fetchProducts
  );

  const devices = data?.map((device) => (
    <ProductItem
      key={device.id}
      id={device.id}
      brand={device.brand}
      model={device.model}
      price={device.price}
      imgUrl={device.imgUrl}
    />
  ));

  return (
    <>
      {status === 'error' && <p>{error.toString()}</p>}
      {(status === 'loading' || isFetching) && <p>Fetching data...</p>}
      {status === 'success' && <PLPList>{devices}</PLPList>}
    </>
  );
};

ProductList.propTypes = {};

export default ProductList;
