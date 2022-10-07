import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import {
  BASE_URL,
  BREAKPOINT_SIZES,
  CARD_DIRECTION,
} from '../../core/constants';
import {
  ProductInfo,
  ImgContainer,
  Image,
  Content,
  Title,
  Desc,
  SubTitle,
  Key,
  Details,
  Actions,
} from './styles/ProductDetails.styles';
import Card from '../UI/Card';
import { Price } from './styles/ProductItem.styles';
import { useEffect, useState } from 'react';

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
          <Details>
            <Title>
              {brand} {model}
            </Title>
            <Price>Precio: {price}€</Price>
            <SubTitle>Características:</SubTitle>
            <Desc>
              <Key>CPU:</Key> {cpu}
            </Desc>
            <Desc>
              <Key>RAM:</Key> {ram}
            </Desc>
            <Desc>
              <Key>Sistema Operativo:</Key> {os}
            </Desc>
            <Desc>
              <Key>Resolución de pantalla:</Key> {displayResolution}
            </Desc>
            <Desc>
              <Key>Tipo de pantalla:</Key> {displayType}
            </Desc>
            <Desc>
              <Key>Tamaño de pantalla:</Key> {displaySize}
            </Desc>
            <Desc>
              <Key>Memoria interna:</Key> {internalMemory}
            </Desc>
            <Desc>
              <Key>Memoria externa:</Key> {externalMemory}
            </Desc>
            <Desc>
              <Key>Batería:</Key> {battery}
            </Desc>
            <Desc>
              <Key>Cámara principal:</Key> {primaryCamera}
            </Desc>
            <Desc>
              <Key>Cámara secundaria:</Key> {secondaryCmera}
            </Desc>
            <Desc>
              <Key>Dimensiones:</Key> {dimentions}
            </Desc>
            <Desc>
              <Key>Peso:</Key> {weight}g.
            </Desc>
          </Details>
          <Actions>
            <Desc>Actions panel</Desc>
            <div>
              <label for='storage'>Almacenamiento: </label>
              <select name='storage' id='storage'>
                {options.storages.map((storage) => (
                  <option value={storage.code}>{storage.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label for='color'>Color: </label>
              <select name='color' id='color'>
                {options.colors.map((color) => (
                  <option value={color.code}>{color.name}</option>
                ))}
              </select>
            </div>
          </Actions>
        </Content>
      </>
    );
  };

  return (
    <>
      {status === 'error' && <Desc>{error.toString()}</Desc>}
      {(status === 'loading' || isFetching) && <Desc>Fetching data...</Desc>}
      {status === 'success' && !!data && (
        <ProductInfo>
          {width >= BREAKPOINT_SIZES.md ? (
            <Card direction={CARD_DIRECTION.row} width='100%'>
              {<ProductContent />}
            </Card>
          ) : (
            <Card width='100%'>{<ProductContent />}</Card>
          )}
        </ProductInfo>
      )}
    </>
  );
};

ProductDetails.propTypes = {
  id: PropTypes.string,
};

export default ProductDetails;
