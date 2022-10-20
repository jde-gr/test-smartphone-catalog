import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
import { PLPList, PageContainer } from './styles/ProductList.styles';

const ProductList = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    !filteredData.length && setFilteredData(data);
  }, [data, filteredData]);

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
      {!!filteredData.length && <PLPList>{devices}</PLPList>}
    </PageContainer>
  );
};

export default ProductList;
