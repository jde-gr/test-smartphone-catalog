import PropTypes from 'prop-types';
import {
  Image,
  ImgContainer,
  Content,
  Details,
  Title,
  Price,
  SubTitle,
  Desc,
  Key,
} from './styles/ProductDetails.styles';

export const ProductInfo = ({
  brand,
  model,
  price,
  cpu,
  ram,
  os,
  displayResolution,
  displayType,
  displaySize,
  internalMemory,
  externalMemory,
  battery,
  primaryCamera,
  secondaryCmera,
  dimentions,
  weight,
}) => {
  return (
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
  );
};

ProductInfo.propTypes = {
  imgUrl: PropTypes.string,
  brand: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string,
  cpu: PropTypes.string,
  ram: PropTypes.string,
  os: PropTypes.string,
  displayResolution: PropTypes.string,
  displayType: PropTypes.string,
  displaySize: PropTypes.string,
  internalMemory: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  externalMemory: PropTypes.string,
  battery: PropTypes.string,
  primaryCamera: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  secondaryCmera: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  dimentions: PropTypes.string,
  weight: PropTypes.string,
};

export default ProductInfo;
