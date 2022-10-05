import React from 'react';

const ProductItem = (props) => {
  const { id, brand, model, price, imgUrl } = props;
  return (
    <div>
      <h1>ProductItem</h1>
      <p>Id: {id}</p>
      <p>Marca: {brand}</p>
      <p>Modelo: {model}</p>
      <p>Precio: {price}</p>
      <img src={imgUrl} alt={`Dispositivo ${brand} ${model}`} />
    </div>
  );
};

export default ProductItem;
