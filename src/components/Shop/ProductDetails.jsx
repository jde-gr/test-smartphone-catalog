import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import { BASE_URL, CARD_DIRECTION } from '../../core/constants';
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
  } = !!data && data;

  return (
    <>
      {status === 'error' && <Desc>{error.toString()}</Desc>}
      {(status === 'loading' || isFetching) && <Desc>Fetching data...</Desc>}
      {status === 'success' && !!data && (
        <ProductInfo>
          <Card direction={CARD_DIRECTION.row} width='100%'>
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
              </Actions>
            </Content>
          </Card>
        </ProductInfo>
      )}
    </>
  );
};

ProductDetails.propTypes = {
  id: PropTypes.string,
};

export default ProductDetails;
