import PropTypes from 'prop-types';

import {
  CARD_DIRECTION,
  FETCHNOTIFICATIONMSG,
  FETCHNOTIFICATIONTITLE,
  NOTIFICATIONSTATUS,
} from '../../core/constants';
import {
  ProductContainer,
  ImgContainer,
  Image,
  Content,
  LinkContainer,
  LoadingWrapper,
} from './styles/ProductDetails.styles';
import Card from '../UI/Card';
import ProductInfo from './ProductInfo';
import ProductActions from './ProductActions';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { useProduct } from '../../hooks/useProduct';

const ProductDetails = ({ id }) => {
  const { status, data, error, isFetching } = useProduct({ id });
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

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    status === 'error' &&
      dispatch(
        uiActions.showNotification({
          status: NOTIFICATIONSTATUS.error,
          title: FETCHNOTIFICATIONTITLE.error,
          message: `${FETCHNOTIFICATIONMSG.error}: ${error.toString()}`,
        })
      );
  }, [dispatch, error, status]);

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
          <ProductActions id={id} options={options} />
        </Content>
      </>
    );
  };

  return (
    <>
      {(status === 'loading' || isFetching) && (
        <LoadingWrapper>
          <LoadingSpinner />
        </LoadingWrapper>
      )}
      {status === 'success' && !!data && (
        <>
          <LinkContainer>
            <Link to={'/devices'}>{'<'} Volver</Link>
          </LinkContainer>
          <ProductContainer>
            <Card direction={CARD_DIRECTION.row} width='100%'>
              {<ProductContent />}
            </Card>
          </ProductContainer>
        </>
      )}
    </>
  );
};

ProductDetails.propTypes = {
  id: PropTypes.string,
};

export default ProductDetails;
