import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';

import {
  BASE_URL,
  BREAKPOINT_SIZES,
  CARD_DIRECTION,
} from '../../core/constants';
import {
  ProductContainer,
  ImgContainer,
  Image,
  Content,
  Desc,
  Actions,
} from './styles/ProductDetails.styles';
import Card from '../UI/Card';
import ProductInfo from './ProductInfo';
import ProductActions from './ProductActions';

const ProductDetails = ({ id }) => {
  const fetchProduct = async () => {
    const res = await fetch(`${BASE_URL}/product/${id}`);
    const data = await res.json();
    return data;
  };

  // const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useQuery('product', fetchProduct);

  const {
    brand,
    model,
    price,
    imgUrl,
    cpu,
    ram,
    os,
    displayResolution,
    displayType,
    displaySize,
    externalMemory,
    internalMemory,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
    options,
  } = !!data && data;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const ProductContent = () => {
    return (
      <>
        <ImgContainer>
          <Image src={imgUrl} alt={`Dispositivo ${brand} ${model}`} />
        </ImgContainer>
        <Content>
          <ProductInfo
            brand={brand}
            model={model}
            price={price}
            cpu={cpu}
            ram={ram}
            os={os}
            displayResolution={displayResolution}
            displayType={displayType}
            displaySize={displaySize}
            internalMemory={internalMemory}
            externalMemory={externalMemory}
            battery={battery}
            primaryCamera={primaryCamera}
            secondaryCmera={secondaryCmera}
            dimentions={dimentions}
            weight={weight}
          />
          <ProductActions options={options} />
        </Content>
      </>
    );
  };

  return (
    <>
      {status === 'error' && <Desc>{error.toString()}</Desc>}
      {(status === 'loading' || isFetching) && <Desc>Fetching data...</Desc>}
      {status === 'success' && !!data && (
        <ProductContainer>
          {width >= BREAKPOINT_SIZES.md ? (
            <Card direction={CARD_DIRECTION.row} width='100%'>
              {<ProductContent />}
            </Card>
          ) : (
            <Card width='100%'>{<ProductContent />}</Card>
          )}
        </ProductContainer>
      )}
    </>
  );
};

ProductDetails.propTypes = {
  id: PropTypes.string,
};

export default ProductDetails;
