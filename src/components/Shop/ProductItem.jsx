import { Link } from 'react-router-dom';

import Card from '../UI/Card';
import {
  Brand,
  Content,
  Image,
  ImgContainer,
  LinkContainer,
  Model,
  Price,
} from './styles/ProductItem.styles';

const ProductItem = (props) => {
  const { id, brand, model, price, imgUrl } = props;
  return (
    <Card>
      <LinkContainer>
        <Link
          to={`/device/:${id}`}
          state={{ id: id, device: `${brand} ${model}` }}
          data-testid={id}
        >
          <ImgContainer>
            <Image src={imgUrl} alt={`Dispositivo ${brand} ${model}`} />
          </ImgContainer>
          <Content>
            <Brand>Marca: {brand}</Brand>
            <Model>Modelo: {model}</Model>
            <Price>Precio: {price}€</Price>
          </Content>
        </Link>
      </LinkContainer>
    </Card>
  );
};

export default ProductItem;
