import React from 'react';
import Card from '../UI/Card';
import {
  Brand,
  Content,
  Image,
  ImgContainer,
  Model,
  Price,
} from './styles/ProductItem.styles';

const ProductItem = (props) => {
  const { id, brand, model, price, imgUrl } = props;
  return (
    <Card>
      <ImgContainer>
        <Image src={imgUrl} alt={`Dispositivo ${brand} ${model}`} />
      </ImgContainer>
      <Content>
        <Brand>Marca: {brand}</Brand>
        <Model>Modelo: {model}</Model>
        <Price>Precio: {price}€</Price>
      </Content>
    </Card>
  );
};

export default ProductItem;
